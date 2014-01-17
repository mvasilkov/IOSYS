var assert = require('assert'),
    git = require('../lib/git')

describe('git', function () {
    function reject(a) { assert.equal(0, a|0) }

    it('should be usable', function (done) {
        this.timeout(500)
        git.usable(done)
    })

    it('should provide isRepo', function () {
        assert(git.isRepo(process.cwd()))
        reject(git.isRepo('/bin'))
        reject(git.isRepo('/shrubbery'))
    })
})
