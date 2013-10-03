var assert = require('assert'),
    iosys  = require('../IOSYS.js')

describe('IOSYS', function () {
    function eq(a, b) { assert.strictEqual(a, b) }
    function reject(a) { assert.equal(0, a|0) }

    it('is.dir', function () {
        assert(iosys.is.dir('/bin'))     // dir
        reject(iosys.is.dir('/bin/cp'))  // file
        reject(iosys.is.dir('/ninjacy')) // n/a
    })

    it('is.file', function () {
        reject(iosys.is.file('/bin'))     // dir
        assert(iosys.is.file('/bin/cp'))  // file
        reject(iosys.is.file('/jesusry')) // n/a
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
})
