let S = require('string');

const WORD_LENGTH = 64;
const PAD_CHAR = '0';

exports.FormattingUtils = class {

    static padLeft(data) {
        if (data === undefined || typeof data !== 'string' || S(data).isEmpty() || S(data).length > WORD_LENGTH) {
            return null
        }

        return S(data).padLeft(WORD_LENGTH, PAD_CHAR).s;
    }

};