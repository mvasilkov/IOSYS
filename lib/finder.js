var is = require('./is.js')

function finder() {
    var args = Array.prototype.slice.call(arguments)

    return function (filename) {
        var res = null
        args.some(function (path) {
            var test = path + '/' + filename
            if (is.file(test)) {
                res = test
                return true
            }
        })
        return res
    }
}

module.exports = finder
