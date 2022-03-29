/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-28 18:16:18
 * @LastEditTime: 2022-03-28 18:33:01
 * @LastEditors: 张楷滨
 */
const req = require.context('../../../assets/icons/svg', true, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys()

const re = /\.\/(.*)\.svg/

const svgIcons = requireAll(req).map((i) => {
  const path = i.match(re)[1]

  return path.split('/')[1]
})

export default svgIcons
