import { cloneDeep } from 'loadsh'
/**
 * 设置
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

function setMenuItem(h, route, menuItemProps) {
  const index = route.redirect ? route.redirect : route.path
  // const isActive = router.history.current.path === index
  // console.log(isActive, index)
  // class={isActive ? 'is-custom-active' : ''}
  return (
    <ElMenuItem key={index} attrs={menuItemProps} index={index}>
      {route.meta.title}
    </ElMenuItem>
  )
}

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
