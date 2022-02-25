// const Mock = require('mockjs')

const user = require('./modules/user')

// const moduleFiles = require.context('./modules', true, /\.js$/)

// const mocks1 = moduleFiles.keys().reduce((modules, modulePath) => {
//   const value = moduleFiles(modulePath)
//   modules.push(value)
//   console.log(value);
// }, [])

// console.log(mocks1);

const mocks = [
  ...user
]


module.exports = {
  mocks
}
