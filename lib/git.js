var childProcess = require('child_process'),
    isDir = require('./path').isDir

function isUsable(fn) {
    childProcess.exec('git help', function (err) {
        if (err) console.error('iosys: git is not usable')
        else fn()
    })
}

function isRepo(path) {
    /* jshint laxbreak: true */
    return isDir(path + '/.git')
        && isDir(path + '/.git/objects')
        && isDir(path + '/.git/refs')
}

module.exports.isUsable = isUsable
module.exports.isRepo   = isRepo
