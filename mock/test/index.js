// 首先引入Mock
const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '60000'
});

const modulesFile = require.context('./modules', true, /\.js$/)

const mocks = modulesFile.keys().reduce((mockArr, path) => {
    const value = modulesFile(path)
    if (Array.isArray(value.default)) mockArr.push(...value.default)
    else mockArr.push(value.default)
    return mockArr
}, []);



// 注册所有的mock服务
// mocks.forEach((item) => {
//     for (let [path, target] of Object.entries(item)) {
//         let protocol = path.split('|');
//         console.log(new RegExp('^http://localhost:8080' + protocol[1]), protocol[0], target);
//         Mock.mock(new RegExp('^http://localhost:8080' + protocol[1]), protocol[0], () => {
//             return target
//         });
//     }
// });

// console.log('mocks', mocks);

module.exports = {
    mocks
}