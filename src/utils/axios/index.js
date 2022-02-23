import axios from 'axios'
import { Loading } from 'element-ui'
import MessageTip from '../MessageTip';
import { cloneDeep } from 'loadsh'
import { addPending, removePending, LoadingInstance, closeLoading } from './axiosUtils'

// 基础自定义配置
const baseCustomOptions = {
    repeatequestancel: true, // 是否开启取消重复请求, 默认为 true
    loading: false, // 是否开启loading层效果, 默认为false
    reductDataFormat: true, // 是否开启简洁的数据结构响应, 默认为true
    errorMessageShow: true, // 是否开启接口错误信息展示,默认为true
    codeMessageShow: false, // 是否开启code不为0时的信息提示, 默认为false
}

// 基础Loading配置
const baseLoadingOptions = {
    lock: true,
    text: '加载中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
}

export function request(axiosConfig, customOptions, loadingOptions) {
    // 如果未设置axiosConfig，直接返回并报错
    if (!axiosConfig) {
        MessageTip.error('未配置axiosConfig!')
        return
    }
    // 合并自定义配置 
    const mergeCustomOptions = Object.assign({}, cloneDeep(baseCustomOptions), customOptions)

    // 合并Loading配置 
    const mergeLoadingOptions = Object.assign({}, cloneDeep(baseLoadingOptions), loadingOptions)

    // 初始化axios实例
    const service = axios.create({
        // baseURL: 'http://localhost:8080', // 设置统一的请求前缀
        timeout: 10000, // 设置统一的超时时长
    });


    /**
     * 请求拦截
     **/
    service.interceptors.request.use(config => {
        mergeCustomOptions.repeatequestancel && removePending(config); // 删除重复请求
        mergeCustomOptions.repeatequestancel && addPending(config); // 添加重复请求
        // mergeCustomOptions.loading为true, 创建loading实例
        if (mergeCustomOptions.loading) {
            LoadingInstance._count++;
            if (LoadingInstance._count === 1) {
                LoadingInstance._target = Loading.service(mergeLoadingOptions);
            }
        }
        return config
    })

    /**
     * 响应拦截
     **/
    service.interceptors.response.use(
        response => {
            mergeCustomOptions.repeatequestancel && removePending(response.config); // 删除重复请求
            mergeCustomOptions.loading && closeLoading(mergeCustomOptions, LoadingInstance); // 关闭loading
            return Promise.resolve(response)
        },
        error => {
            error.config && mergeCustomOptions.repeatequestancel && removePending(error.config); // 删除重复请求
            mergeCustomOptions.loading && closeLoading(mergeCustomOptions, LoadingInstance); // 关闭loading
            console.log('err', JSON.parse(JSON.stringify(error)))
            return Promise.reject(error)
        }
    )

    return service(axiosConfig)
}




export default request