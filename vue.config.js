const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        open: true,
        // before(app) {
        //     app.get("/parameter/query", (req, res, next) => {
        //         res.json(res);
        //     });
        // }
        before: require('./mock/mock-server.js')
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}