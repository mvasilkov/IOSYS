var assert = require('assert'),
    iosys  = require('../iosys')

describe('iosys', function () {
    function eq(a, b) { assert.strictEqual(a, b) }
    function reject(a) { assert.equal(0, a|0) }

    it('path.isDir', function () {
        assert(iosys.path.isDir('/bin'))     // dir
        reject(iosys.path.isDir('/bin/cp'))  // file
        reject(iosys.path.isDir('/ninjacy')) // n/a
    })

    it('path.isFile', function () {
        reject(iosys.path.isFile('/bin'))     // dir
        assert(iosys.path.isFile('/bin/cp'))  // file
        reject(iosys.path.isFile('/jesusry')) // n/a
    })

    it('esc.html', function () {
        eq(iosys.esc.html('<Plug & Play>'), '&lt;Plug &amp; Play>')
        eq(iosys.esc.html('<?php "programming" language ?>'),
            '&lt;?php "programming" language ?>')
    })

    it('esc.attr', function () {
        eq(iosys.esc.attr('<Plug & Play>'), '&lt;Plug &amp; Play>')
        eq(iosys.esc.attr('<?php "programming" language ?>'),
            '&lt;?php &quot;programming&quot; language ?>')
    })

    it('finder', function () {
        var dir = process.cwd(),
            f = iosys.finder(dir + '/lib', dir + '/test')

        eq(f('finder.js'), dir + '/lib/finder.js')
        eq(f('basic.js'), dir + '/test/basic.js')
        reject(f('package.json'))
        reject(f('autoexec.bat'))
    })
})
