var assert = require('assert'),
    fs     = require('fs'),
    iosys  = require('../IOSYS.js')

describe('IOSYS.finder', function () {
    function eq(a, b) { assert.strictEqual(a, b) }
    function reject(a) { assert.equal(0, a|0) }

    var dir = process.cwd(),
        f = iosys.finder(dir + '/test/a', dir + '/test/b', dir + '/test/c')

    it('mapReduce', function () {
        function mapFn(f) { return fs.readFileSync(f, {encoding: 'utf-8'}) }
        function reduceFn(a, b) { return a + b }

        eq(f.mapReduce('string.txt', mapFn, reduceFn, 'string.txt:\t'),
            'string.txt:\tЛЕНИН\nПАРТИЯ\nКОМСОМОЛ\n')
    })
})
