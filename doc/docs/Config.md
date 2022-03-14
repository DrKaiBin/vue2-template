<!--
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-08 19:07:52
 * @LastEditTime: 2022-03-14 11:50:31
 * @LastEditors: 张楷滨
-->

# 框架配置

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
