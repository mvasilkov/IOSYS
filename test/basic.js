var assert = require('assert'),
    iosys  = require('../IOSYS.js')

describe('IOSYS', function () {
    function reject(a) { assert.equal(0, a|0) }

    it('should provide isDir()', function () {
        assert(iosys.isDir('/bin'))     // dir
        reject(iosys.isDir('/bin/cp'))  // file
        reject(iosys.isDir('/ninjacy')) // n/a
    })

    it('should provide isFile()', function () {
        reject(iosys.isFile('/bin'))     // dir
        assert(iosys.isFile('/bin/cp'))  // file
        reject(iosys.isFile('/jesusry')) // n/a
    })
})
