<!--
 * @Description: 项目使用
 * @Author: 张楷滨
 * @Date: 2022-03-08 16:58:06
 * @LastEditTime: 2022-03-28 19:29:30
 * @LastEditors: 张楷滨
-->

# 快速上手框架文档

## Vue-Router 路由模块

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

## Vuex 全局状态管理模块

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

## Mock 模拟 API

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

## Jest 测试

## Axios 全局 API

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

## Icon 配置及使用

### 配置

- 首先你需要了解：
  - 如果你添加的 svg 仅当作为背景，则你仅需要放到当前页面文件下的`images目录`即可。
  - 相反，作为非背景，你需要进行一下步骤：
    1. 你需要将其放置：`asset\icons\svg`下
       - `buttonIcons`文件夹：按钮型图标（建议按钮型放置于此文件夹下）
       - `sidebarIcons`文件夹：侧边栏图标（该文件夹下仅存放侧边栏图标）
       - 如你需要你可以添加更多文件夹归类
    2. 放置后好，手动将其填充色删掉（一般将 svg 中的 color 删掉即可）
  - 当你将 svg 存放好后，重启项目后，便会自动添加至 svg-sprite 中
- 当为按钮图标时，你还需要
  - 在`utils/lang/zh.js`中的`icons`添加描述，此作用为，按钮图标鼠标移上需要真是提示

### 使用

- 如果为侧边栏图标，你只需在路由中添加 icon 属性并值对应为图标名称即可
- 如果为页面上，你可使用`<svg-icon> `/ `<icon-button>`
  - 添加`icon={图标名}`
  - 项目上所有图标均为无颜色，所以你需要添加一个  
    `type=""可选值：primary/success/wanring/danger/info`  
    当然如果以上颜色均不符合你的需求，你可以添加`iconStyle/iconClass`添加 color 属性颜色即可
- 具体的模板图标库，你可直接查看主题路由模块下的`图标库`

## FormRule 表单校检

## Styles 全局样式

### 全局样式注册

- 默认已在该模板中加入全局变量（variables.scss），全局 mixins（mixins.scss）。你在组件中使用时，无需再次引入，直接使用即可
- 同时，我们在写颜色，间距等用全局变量，而非自己添加。这样才能保证主题化定制功能，减少不必要开发时间

### 基础布局

- 本模板提供了两种基础样式布局
- ## 业务类布局

## Theme 主题定制

- 在主题模块下，已为你准备好调色板，并写上了对应的描述，你只需要调整对应颜色，即可对当前已配置主题效果的页面生效
- 复制到剪切板
  - 如果你想将设置好的主题应用于项目，你可直接将其复制到剪切板，并将复制内容替换到`styles/variables.scss`中的`$root-map`变量中即可
- 保存到当前浏览器
  - 当你对对应的项，进行调色后，你可直接点击`保存到当前浏览器`，这样在页面刷新后，你就仍可以为你调整后的颜色
- 重置样式

  - 当你做过保存到当前浏览器后，如果你需要还原回项目以后的颜色，你需要点击`重置样式`，对应项目主题进行重置

:::tip
暂不支持 IE 浏览器使用(`采用css var()`)，如果需要支持 IE，你需要在`styles/variables.scss`将对应的`var`更换为普通变量  
暂不支持对 ElementUI 组件库进行主题定制，你需要到 [ele 官网](https://element.eleme.cn/#/zh-CN/theme/preview)，进行主题定制修改，并将下载文件后，替换掉`styles/elementUiStyle`目录下的文件
:::

## Empty 暂无配置及使用

### 配置

- 暂无样式存放于`asset/background\empty`, 你可在`前端路由`模式下，查看对应的已有样式。
- 如果你想添加新的暂无样式，你只需将`svg`直接存放于`asset/background\empty`即可

### 使用

- 你需要在容器中添加指令`v-el-empty:[svg-item]="value"`
  - svg-item：暂无 svg 的名称
  - value: 对应数组的长度，当为`null、undefined、0`时，展示暂无样式
