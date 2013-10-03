var fs = require('fs')

function isFn(method) {
    return function (path) {
        try { return fs.statSync(path)[method]() }
        catch (err) { return null }
    }
}

module.exports.dir = isFn('isDirectory')
module.exports.file = isFn('isFile')
