<!--
 * @Description: 项目配置
 * @Author: 张楷滨
 * @Date: 2022-03-08 19:07:52
 * @LastEditTime: 2022-03-16 19:08:23
 * @LastEditors: 张楷滨
-->

# 框架配置

## env 下的参数配置作用

1. `VUE_APP_USE_MOCK`--**接口模拟**

   - 当为`'true'`时，默认所有接口会使用`mock/modules`下已注册的，如果你需要一些使用模拟，一些使用后台
     请通过 vueProxy 代理修改
   - 当为`'false'`时，默认所有接口会使用后台，你必须保证初始项目接口相同，否则容易出现项目无法使用情况
   - 使用具体可参考[Mock 使用](/UseManual.html#mock-%E4%BD%BF%E7%94%A8)

2. `VUE_APP_SETTING_BY_WEB`--**前端配置**

   - 使用具体可参考[修改项目标题](#修改项目标题)

3. `VUE_APP_PROJECT_TITLE`--**项目标题**

   - 使用具体可参考[修改项目标题](#修改项目标题)

4. `VUE_APP_ROLES_BY_WEB`--**路由模式**

   - 当为`'true'`时，前端路由，直接使用 router 文件夹下的路由
   - 当为`'false'`时，后端路由，获取通过后端生成的，并通过 name 映射`router/module`下的组件，再生成
   - 使用具体可参考[vue-router](/UseManual.html#添加-vue-router-路由模块)

5. `VUE_APP_ROOT_PATH`--**编译后生成根路径**

   - 默认为`/`, 你可修改该参数改变根路径
   - 仅在 NODE_ENV 为`production`下生效

6. `VUE_APP_SPEED_MEASURE_WEBPACK`--**打包速度分析**

   - 当为`'true'`时，编译过程中，对每个模块包进行打包时间分析，你可以通过分析展示的时间长短并对其进行优化
   - 仅在 NODE_ENV 为`production`下生效

7. `VUE_APP_BUNDLE_ANALYZER_PLUGIN`--**打包大小分析**

   - 当为`'true'`时，编译后，自动将编译后的模块大小展示于页面上，你可以通过分析展示的信息编译文件大小并对其进行优化
   - 仅在 NODE_ENV 为`production`下生效

## 修改项目 logo

- 模板更换 logo
  - 直接在`public/images/logo/company-logo.svg`直接替换`company-logo.svg`
- 打包后更换 logo
  - 直接在打包后的`dist/images/company-logo.svg`直接替换`company-logo.svg`

## 修改项目标题

**1. env 下的 VUE_APP_SETTING_BY_WEB**

- 为 ture，前端可以直接自定义项目标题
- 无论开发还是产品，均可以在`public/config/config.js`下设置 projectTitle
- 为 false, 前部不可以直接自定义项目标题
- 无论开发还是产品，仅能在`env`下设置`VUE_APP_PROJECT_TITLE`
