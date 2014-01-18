var assert = require('assert'),
    iosys = require('../iosys')

describe('iosys.git', function () {
    function reject(a) { assert.equal(0, a|0) }

    it('isUsable', function (done) {
        this.timeout(500)
        iosys.git.isUsable(done)
    })

    it('isRepo', function () {
        assert(iosys.git.isRepo(process.cwd()))
        reject(iosys.git.isRepo('/bin'))
        reject(iosys.git.isRepo('/wharrgarbl'))
    })
})
