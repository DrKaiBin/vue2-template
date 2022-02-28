function treeDataBuilder({ dataList, rootNode, treeConfig, nodeFilterArr }) {
  const nodeMap = new Map() // 存储各节点数据，id为key，node为value
  const treeData = [rootNode] // 存储树形数据
  const dataListCp = dataList.concat() // 存储剩余dataList
  // 不设置根节点，则默认为：
  if (rootNode == null && typeof rootNode !== 'object') {
    rootNode = { id: 0, label: '根节点', children: [] }
  }
  // 不设置字段名，则默认为：
  if (treeConfig == null && typeof treeConfig !== 'object') {
    treeConfig = { key: 'id', parentKey: 'parentId', childrenKey: 'children' }
  }
  let processCount = 1
  const getParentIdFun = (node) => node[treeConfig.parentKey] // 获取父节点
  const getNodeIdFun = (node) => node[treeConfig.key] // 获取节点id
  const nodeFilter = (node) => {
    if (nodeFilterArr) return nodeFilterArr.includes(node[treeConfig.key])
    else return false
  } // 节点过滤
  // 设置根
  treeData[0] = rootNode
  nodeMap.set(rootNode[treeConfig.key], rootNode)
  while (processCount !== 0) {
    processCount = 0
    for (let i = 0; i < dataListCp.length; i++) {
      const node = dataListCp[i]
      const id = getNodeIdFun(node)
      const parentId = getParentIdFun(node)
      const parentNode = nodeMap.get(parentId)
      if (nodeFilter(node)) continue
      if (parentNode == null) continue
      // 添加children
      if (parentNode[treeConfig.childrenKey] == null) {
        parentNode[treeConfig.childrenKey] = []
      }
      parentNode[treeConfig.childrenKey].push(node)
      dataListCp.splice(i, 1)
      i--
      if (id) nodeMap.set(id, node)

      processCount++
    }
  }
  return { treeData, nodeMap }
}

export default treeDataBuilder
