<!--
 * @Description: 项目使用
 * @Author: 张楷滨
 * @Date: 2022-03-08 16:58:06
 * @LastEditTime: 2022-03-16 18:02:53
 * @LastEditors: 张楷滨
-->

# 快速上手框架文档

## <div id="addRouter">添加 Vue-Router 路由模块</div>

### 前端路由

**1. 添加新的路由模块**

- 直接在 `src/router/modules` 添加新模块
- 路由模块必须为**对象**，并**默认**导出该路由模块
- 路由中的第一个路由，默认**展示在顶部导航栏**；  
  `parentId`必须默认为`'layout'`， `component`必须为`() => import('@/layout/index')`
- 二级路由必须添加 `parentId`,且`parentId`为**第一个路由 id**
- 对象字段名主要为获取后端路由，渲染对应组件
- 当导航栏类型为：顶侧导航栏时，二级路由默认会以 id 值自动添加**对应的 icon**

**2. 路由项配置**

- 为一个对象，参数如下：
- 必选参数：
  - id: string // 1、路由路径； 2、组件 name；
  - parentId: string // 构建树形结构路由；
  - component: component // 渲染页面组件;
- 可选参数：
  - title：string // 展示于导航栏的标题，默认为：‘未设置标题’
  - hidden: boolean // 是否将其隐藏，不显示在导航栏上

**3. SUCCESS**

- 配完以上步骤后，路由模块便自动注册到 router 中！

**示例**

```js
const utilRoutes = {
  utilIndex: {
    id: 'utilIndex',
    parentId: 'layout',
    title: '工具模块',
    component: () => import('@/layout/index'),
  },
  utilSafe: {
    id: 'utilSafe',
    parentId: 'utilIndex',
    title: '工具安全',
    component: () => import('@/views/dashboard/index'),
  },
  util666: {
    id: 'util666',
    parentId: 'utilIndex',
    title: '工具666',
    hidden: true,
    component: () => import('@/views/dashboard/index'),
  },
}

export default utilRoutes
```

::: tip  
1.使用前端路由，请在 env 环境下将`VUE_APP_ROLES_BY_WEB`设置为 true  
2.如果以存在模块，请直接在已有模块添加路由！  
3.如果第一个路由直接设置 hidden 属性，则整个路由模块均会被隐藏
:::

### 后端路由

**1. 后端返回格式**

```js
<!-- 必须返回为数组对象 -->
[
    {
      id: 1, // 路由id
      parentId: 0, // 如果为新模块时，第一个必须parentId为0
      name: 'testIndex', // 路由名称，名称必须已存在于`src/router/modules` 下中的路由，否则控制台输出错误信息
      title: '测试模块', // 渲染到页面上的导航栏菜单
      hidden: boolean //是否隐藏
    },
     {
      id: 2, // 路由id
      parentId: 1, // 父节点id： 1
      name: 'testIndex', // 路由名称，名称必须已存在于`src/router/modules` 下中的路由，否则控制台输出错误信息
      title: '测试子路由1', // 渲染到页面上的导航栏菜单
    },
    ...
]
```

**2. 确认是否前端路由以存在映射路由**

- 后端路由返回的列表，是否已存在`src/router/modules` 中，不存在，需手动添加，否则，控制台报错`招不到xxx组件`

**3. SUCCESS**

- 配完以上步骤后，路由模块便自动注册到 router 中！

## 添加 Vuex 全局状态管理模块

**1. 添加新的模块**

- 直接在 `src/store/modules` 添加新模块
- 模块格式：

```js
const state = {}
const mutations = {}
const actions = {}
export default {
  state,
  mutations,
  actions,
}
```

**2. 是否配置到`getter`**

- 默认 store 下存在一个公共`getter.js`，方便获取
- 格式如下：
  `xxx: state => state.xxx(模块名).xxx(state下的属性)`

**3. SUCCESS**

- 配完以上步骤后，`store 模块`便自动注册到 vuex 中！

## Mock 使用

**1. 添加新的 Mock 模块**

- 直接在 `mock/modules` 添加新模块
- 路由模块必须为**数组**，并**默认**导出该路由模块

**2. 单个 API 配置**

- 为一个对象，参数如下：
- 必选参数：
  - url: string // 请求路径
  - type: string // 请求方式
  - response: Function // 响应结果

**3. 注册路由模块**

- 配置完后，在`mock/index.js`中引入，并添加解构到 mocks 数组中

**4. SUCCESS**

- 配完以上步骤后，便可以使用！

**示例**

```js
const testApi = [
  {
    url: '/parameter/query',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          result: 666,
        },
      }
    },
  },
]
export default testApi
```

## 全局 API 使用

**1. 引入全局 API**

- `import request from '@/utils/axios'`

**2. 参数配置**

- `axiosConfig`, `customOptions`, `loadingOptions`
  - 第一个对象参数为：axios 的通用请求配置
    - `url`: string // 请求路径
    - `type`: string // 请求方式
    - 更多请参考[axios 文档](https://www.axios-http.cn/docs/req_config)
  - 第二个对象参数为：全局通用请求操作
    - `repeatequestancel`: boolean // 是否开启取消重复请求, 默认为 true
    - `loading`: boolean // 是否开启 loading 层效果, 默认为 false
    - `reductDataFormat`: boolean // 是否开启简洁的数据结构响应, 默认为 true
    - `errorMessageShow`: boolean // 是否开启接口错误信息展示,默认为 true
  - 第三个对象参数为：Loading 参数配置，默认为
    ```js
    {
      lock: true,
      text: '加载中...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    }
    ```
    如需自定义参数配置，请参考[Loading](https://element.eleme.cn/#/zh-CN/component/loading)

**3. SUCCESS**

- 配完以上步骤后,便可以使用

**示例**

```js
import request from '@/utils/axios'

export function getValue() {
  return request(
    //  axios请求配置
    {
      url: '/parameter/query',
      method: 'get',
      params: {
        hhh1: 1,
      },
    },
    // 自定义配置
    {
      loading: true,
    }
  )
}
```
