/*
 * @Description: 快速生成导航栏（树形结构）
 * @Author: 张楷滨
 * @Date: 2022-03-02 11:11:28
 * @LastEditTime: 2022-03-29 16:47:32
 * @LastEditors: 张楷滨
 */
import { cloneDeep } from 'loadsh'

/**
 * @Description:
 * 设置基础菜单
 * 菜单类型：
 * 1： 顶部导航栏菜单
 * 2： 顶侧双边导航栏菜单
 * @Author: 张楷滨
 * @Date: 2022-03-08 14:31:07
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 */
function setBaseMenu(
  h,
  navBarType,
  routes,
  props,
  onEvents,
  subMenuProps,
  menuItemProps
) {
  return (
    <ElMenu attrs={props} on={onEvents} router={true}>
      {routes.map((route) => {
        if (navBarType === 1)
          return setMenu(h, route, subMenuProps, menuItemProps)
        else if (navBarType === 2) return setMenuItem(h, route, menuItemProps)
      })}
    </ElMenu>
  )
}

/**
 * @Description: 设置导航菜单项
 * @Author: 张楷滨
 * @Date: 2022-03-08 14:33:52
 * @LastEditTime: Do not edit
 * route.redirect ? route.redirect :
 * @LastEditors: 张楷滨
 * @param {*} h 渲染函数
 * @param {*} route 路由
 * @param {*} menuItemProps element-ui <el-menu-item> 参数
 */
function setMenuItem(h, route, menuItemProps) {
  const index = route.path
  if (route.meta && route.meta.hidden && route.meta.hidden === true) return
  return (
    <ElMenuItem key={index} attrs={menuItemProps} index={index}>
      {route.meta.icon ? <svg-icon icon={route.meta.icon}></svg-icon> : ''}
      <span slot="title" class={'title'}>
        {route.meta.title}
      </span>
    </ElMenuItem>
  )
}

/**
 * @Description:
 * 设置导航栏
 * 1：不在在子路由，则直接渲染菜单项
 * 2：存在子路由，且多余两个，则渲染子菜单
 * @Author: 张楷滨
 * @Date: 2022-03-08 14:37:15
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 * @param {*} h 渲染函数
 * @param {*} route 路由
 * @param {*} subMenuProps  element-ui <el-submenu> 子菜单参数
 * @param {*} menuItemProps element-ui <el-menu-item> 参数
 */
function setMenu(h, route, subMenuProps, menuItemProps) {
  if (route.children != null) {
    return (
      <ElSubmenu index={route.name} attrs={subMenuProps}>
        <template slot="title">
          {route.meta.icon ? <svg-icon icon={route.meta.icon}></svg-icon> : ''}
          <span slot="title" class={'title'}>
            {route.meta.title}
          </span>
        </template>
        {route.children.map((child) => {
          child.path = route.path + '/' + child.path
          return setMenu(h, child)
        })}
      </ElSubmenu>
    )
  } else {
    return setMenuItem(h, route, menuItemProps)
  }
}

export default {
  functional: true,
  props: {
    navBarType: {
      type: Number,
      required: true,
    },
    routes: {
      type: Array,
      required: true,
    },
    menuItemProps: {
      type: Object,
      default: () => {
        return {}
      },
    },
    subMenuProps: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  render(h, context) {
    const {
      data: { attrs, on },
      props: { routes, navBarType, subMenuProps, menuItemProps },
    } = context
    const _routes = cloneDeep(routes)
    if (routes && routes.length >= 1) {
      return setBaseMenu(
        h,
        navBarType,
        _routes,
        attrs,
        on,
        subMenuProps,
        menuItemProps
      )
    } else {
      return ''
    }
  },
}
