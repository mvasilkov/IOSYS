var is = require('./is.js'),
    _slice = Array.prototype.slice

function finder() {
    var args = _slice.call(arguments)

    return function (filename) {
        var res = null
        args.some(function (path) {
            var test = path + '/' + filename
            if (is.file(test)) {
                /* jshint boss: true */
                return (res = test)
            }
        })
        return res
    }
}

module.exports = finder
