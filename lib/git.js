var child_process = require('child_process'),
    is = require('./is.js')

function usable(fn) {
    child_process.exec('git help', function (err) {
        if (err) console.error('wat: git is not usable')
        else fn()
    })
}

function isRepo(path) {
    /* jshint laxbreak: true */
    return is.dir(path + '/.git')
        && is.dir(path + '/.git/objects')
        && is.dir(path + '/.git/refs')
}

module.exports = {
    usable: usable,
    isRepo: isRepo
}
