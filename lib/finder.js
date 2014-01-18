var isFile = require('./path').isFile,
    _slice = Array.prototype.slice

function mapReduce(filename, map, reduce, initial) {
    var res = initial
    this.args.forEach(function (path) {
        var test = path + '/' + filename
        if (isFile(test)) {
            res = reduce(res, map(test))
        }
    })
    return res
}

function finder() {
    var args = _slice.call(arguments)

    function f(filename) {
        var res = null
        args.some(function (path) {
            var test = path + '/' + filename
            if (isFile(test)) {
                /* jshint boss: true */
                return (res = test)
            }
        })
        return res
    }

    f.args = args
    f.mapReduce = mapReduce

    return f
}

module.exports = finder
