const chokidar = require('chokidar')
const bodyParser = require('body-parser') // 请求体解析中间件
const chalk = require('chalk')
const path = require('path')
const Mock = require('mockjs')

const mockDir = path.join(process.cwd(), 'mock')

// 注册路由
function registerRoutes(app) {
  let mockLastIndex
  const { mocks } = require('./index.js')
  //  注入Mock.mock
  const mocksForServer = mocks.map((route) => {
    return responseFake(route.url, route.type, route.response)
  })
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocksForServer).length
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength,
  }
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach((i) => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}

//  根据数据模板生成模拟数据
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${url}`),
    type: type || 'get',
    response(req, res) {
      res.json(
        Mock.mock(respond instanceof Function ? respond(req, res) : respond)
      )
    },
  }
}

module.exports = (app) => {
  // parse app.body
  // https://expressjs.com/en/4x/api.html#req.body
  // 解析 application/json
  app.use(bodyParser.json())
  // 解析 application/x-www-form-urlencoded
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  const mockRoutes = registerRoutes(app)
  var mockRoutesLength = mockRoutes.mockRoutesLength
  var mockStartIndex = mockRoutes.mockStartIndex

  // 监听文件修改，实现热更新
  chokidar
    .watch(mockDir, {
      ignored: /mock-server/,
      ignoreInitial: true,
    })
    .on('all', (event, path) => {
      if (event === 'change' || event === 'add') {
        try {
          // 移除对应路由栈
          app._router.stack.splice(mockStartIndex, mockRoutesLength)

          // 清除路由缓存
          unregisterRoutes()

          //  重新注册路由
          const mockRoutes = registerRoutes(app)
          mockRoutesLength = mockRoutes.mockRoutesLength
          mockStartIndex = mockRoutes.mockStartIndex

          console.log(
            chalk.magentaBright(
              `\n > Mock Server hot reload success! changed  ${path}`
            )
          )
        } catch (error) {
          console.log(chalk.redBright(error))
        }
      }
    })
}
