let S = require('string');
let web3Utils = require('web3-utils');

const WORD_LENGTH = 64;
const PAD_CHAR = '0';

exports.FormattingUtils = class {

    static padLeft(data) {
        if (!isValidStringData(data)) {
            return null
        }

        return S(data).padLeft(WORD_LENGTH, PAD_CHAR).s;
    }

    static createArrayKey(data, storageIndex) {
        if (!isValidStringData(data) || !isValidStorageIndex(storageIndex)) {
            return null;
        }
        let key = this.padLeft(data) + this.padLeft(S(storageIndex).s);
        return web3Utils.soliditySha3(key);
    }
};

let isValidStringData = function (data) {
    return data !== undefined && typeof data === 'string' && ! S(data).isEmpty() && S(data).length <= WORD_LENGTH;
};

let isValidStorageIndex = function (storageIndex) {
    return storageIndex !== undefined && typeof storageIndex === 'number' && storageIndex >= 0;
};