'use strict'

const assert = require('chai').assert
const requireValidLogClient = require('../lib/immutable-require-valid-log-client')

describe('require valid log client', function () {

    it('should throw an error if log client is not an object', function () {
        assert.throws(function () {
            requireValidLogClient(undefined)
        }, Error)

        assert.throws(function () {
            requireValidLogClient(null)
        }, Error)

        assert.throws(function () {
            requireValidLogClient([])
        }, Error)
    })

    it('should throw an error if log client does not have correct methods', function () {
        assert.throws(function () {
            requireValidLogClient({})
        }, Error)

        assert.throws(function () {
            requireValidLogClient({
                log: function () {},
            })
        }, Error)

        assert.throws(function () {
            requireValidLogClient({
                error: function () {},
            })
        }, Error)

        assert.throws(function () {
            requireValidLogClient({
                log: false,
                error: function () {},
            })
        }, Error)
    })

    it('should not throw an error if log client has correct methods', function () {
        assert.doesNotThrow(function () {
            requireValidLogClient({
                log: function () {},
                error: function () {},
            })
        }, Error)
    })

})