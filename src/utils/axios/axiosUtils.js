import axios from "axios";
// import Loading from 'element-ui'

/*start-------------------------------重复请求-------------------------------------------*/
// 存储PendingKey对应请求
const pendingMap = new Map();

/**
 * @description 生成唯一的每个请求的唯一key
 * @param {*} config  axios中的config参数
 * @returns [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
 */
export function getPendingKey(config) {
  let { url, method, params, data } = config;
  if (typeof data === "string") data = JSON.parse(data); // response里面返回的config.data是个字符串对象
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join("&");
}

/**
 * @description 为每个请求的唯一设置cancel回调, 以此为标识
 * @param {*} config axios中的config参数
 */
export function addPending(config) {
  const pendingKey = getPendingKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel);
      }
    });
}

/**
 * @description 删除重复的请求：当唯一请求时，自动cancel前一个
 * @param {*} config
 */
export function removePending(config) {
  const pendingKey = getPendingKey(config);
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey);
    cancelToken(pendingKey);
    pendingMap.delete(pendingKey);
  }
}

/*end-------------------------------重复请求---------------------------------------------*/

/*start-----------------------------API-Loading---------------------------------------------*/
// 存储存在loading为True的请求，为0时loading关闭
export const LoadingInstance = {
  _target: null,
  _count: 0,
};

/**
 * @description 关闭Loading层实例
 * @param {*} _options
 */
export function closeLoading(_options, LoadingInstance) {
  // LoadingInstance._target.close()
  if (_options.loading && LoadingInstance._count > 0) LoadingInstance._count--;
  if (LoadingInstance._count === 0) {
    LoadingInstance._target.close();
    LoadingInstance._target = null;
  }
}

/*end-------------------------------API-Loading---------------------------------------------*/


export function errorDeal(error, checkCode) {
    console.log(666, error);
    if (checkCode) {
        return {
            isFail: true
        }
    }
}