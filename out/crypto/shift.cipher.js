"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftCipher = void 0;
class ShiftCipher {
}
exports.ShiftCipher = ShiftCipher;
ShiftCipher.encrypt = (text, amount) => {
    let res = '';
    text = text.toUpperCase();
    for (let i = 0; i < text.length; i++) {
        res += String.fromCharCode(65 + (text.charCodeAt(i) - 65 + amount) % 26);
    }
    return res;
};
ShiftCipher.decrypt = (text, amount) => {
    let res = '';
    text = text.toUpperCase();
    let charCode = 0;
    for (let i = 0; i < text.length; i++) {
        charCode = (text.charCodeAt(i) - 65 - amount % 26);
        if (charCode < 0) {
            charCode += 26;
        }
        res += String.fromCharCode(65 + charCode % 26);
    }
    return res;
};
//# sourceMappingURL=shift.cipher.js.map