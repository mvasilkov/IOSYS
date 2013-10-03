var assert = require('assert'),
    iosys  = require('../IOSYS.js')

describe('IOSYS', function () {
    function reject(a) { assert.equal(0, a|0) }

    it('should provide is.dir()', function () {
        assert(iosys.is.dir('/bin'))     // dir
        reject(iosys.is.dir('/bin/cp'))  // file
        reject(iosys.is.dir('/ninjacy')) // n/a
    })

    it('should provide is.file()', function () {
        reject(iosys.is.file('/bin'))     // dir
        assert(iosys.is.file('/bin/cp'))  // file
        reject(iosys.is.file('/jesusry')) // n/a
    })
})
