let assert = require('chai').assert;
let utils = require('../../formatting/utils');
let web3Utils = require('web3-utils');

describe('Formatting Utils Tests', function() {

    describe('Pad Left Tests', function() {
        // Verification of usual behaviour
        it('should return a correctly padded string when given a single character or digit', function() {
            // Setup
            let inputData       = "1";
            let expectedOutput  = "0000000000000000000000000000000000000000000000000000000000000001";

            // Test
            let outputData = utils.FormattingUtils.padLeft(inputData);

            // Verify
            assert.typeOf(outputData, 'string', 'expected that a string would be returned');
            assert.equal(outputData, expectedOutput, 'expected that the returned value would be correct');
        });

        it('should return a correctly padded string when given an already correctly padded string', function() {
            // Setup
            let inputData       = "0000000000000000000000000000000000000000000000000000000000000001";
            let expectedOutput  = "0000000000000000000000000000000000000000000000000000000000000001";

            // Test
            let outputData = utils.FormattingUtils.padLeft(inputData);

            // Verify
            assert.typeOf(outputData, 'string', 'expected that a string would be returned');
            assert.equal(outputData, expectedOutput, 'expected that the returned value would be correct');
        });

        it('should return a correctly padded string when given a valid Ethereum address', function() {
            // Setup
            let inputData       = "0xea58befa487f21df233a344d6ed6c0354a7be320";
            let expectedOutput  = "00000000000000000000000xea58befa487f21df233a344d6ed6c0354a7be320";

            // Test
            let outputData = utils.FormattingUtils.padLeft(inputData);

            // Verify
            assert.typeOf(outputData, 'string', 'expected that a string would be returned');
            assert.equal(outputData, expectedOutput, 'expected that the returned value would be correct');
        });

        // Edge cases and error handling

    });

});