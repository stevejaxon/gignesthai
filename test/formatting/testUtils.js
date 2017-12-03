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

    describe('Create Array Key Tests', function() {
        // Verification of usual behaviour
        it('should return a correctly padded and hashed string key when given an address prefixed with 0x', function() {
            // Setup
            let inputData = "0x9e5e939fb0a23529934c061d6ecf4c93e7893d4e";
            let inputStorageIndex = 0;
            let expectedKey = "0xf5db272805d238693e842e939a9eb56471e731c4431de8477ecdff18ac509c63";

            // Test
            let outputKey = utils.FormattingUtils.createArrayKey(inputData, inputStorageIndex);

            // Verify
            assert.isTrue(web3Utils.isAddress(inputData), 'expected that the input data would have been a valid address');
            assert.typeOf(outputKey, 'string', 'expected that a string would be returned');
            assert.equal(outputKey, expectedKey, 'expected that the returned value would be correct');
        });

        it('should return a correctly padded and hashed string key when given an address without prefix', function() {
            // Setup
            let inputData = "ea30250dd7263a4783c66463c236a2153d6b88b4";
            let inputStorageIndex = 0;
            let expectedKey = "0x1ba324babf1065cf08a7595ac1e628db8e2d81497ba1c96bd8424299bc108592";

            // Test
            let outputKey = utils.FormattingUtils.createArrayKey(inputData, inputStorageIndex);

            // Verify
            assert.isTrue(web3Utils.isAddress(inputData), 'expected that the input data would have been a valid address');
            assert.typeOf(outputKey, 'string', 'expected that a string would be returned');
            assert.equal(outputKey, expectedKey, 'expected that the returned value would be correct');
        });

        // Edge cases and error handling
    });

});