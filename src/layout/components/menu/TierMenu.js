/*
 * @Description: 快速生成导航栏（树形结构）
 * @Author: 张楷滨
 * @Date: 2022-03-02 11:11:28
 * @LastEditTime: 2022-03-08 14:37:39
 * @LastEditors: 张楷滨
 */
import { cloneDeep } from 'loadsh'

/**
 * @Description:
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
    <ElMenu attrs={props} on={onEvents}>
      {routes.map((route) => {
        if (navBarType === 1)
          return setMenu(h, route, subMenuProps, menuItemProps)
        else if (navBarType === 2) return setMenuItem(h, route, menuItemProps)
      })}
    </ElMenu>
  )
}

/**
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-08 14:33:52
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 * @param {*} h
 * @param {*} route
 * @param {*} menuItemProps
 */
function setMenuItem(h, route, menuItemProps) {
  const index = route.redirect ? route.redirect : route.path
  return (
    <ElMenuItem key={index} attrs={menuItemProps} index={index}>
      {route.meta.title}
    </ElMenuItem>
  )
}

/**
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-08 14:37:15
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 * @param {*} h
 * @param {*} route
 * @param {*} subMenuProps
 * @param {*} menuItemProps
 */
function setMenu(h, route, subMenuProps, menuItemProps) {
  if (route.children == null || route.children.length < 2) {
    return setMenuItem(h, route, menuItemProps)
  } else {
    return (
      <ElSubmenu index={route.name} attrs={subMenuProps}>
        <template slot="title">{route.meta.title}</template>
        {route.children.map((child) => {
          child.path = route.path + '/' + child.path
          return setMenu(h, child)
        })}
      </ElSubmenu>
    )
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
