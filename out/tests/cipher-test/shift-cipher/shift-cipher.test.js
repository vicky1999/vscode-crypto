"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shift_cipher_1 = require("../../../crypto/shift.cipher");
var assert = require('assert');
describe('Shift Cipher Test', function () {
    describe("Encryption Test", () => {
        it('should encrypt text with the specified amount', function () {
            assert.equal(shift_cipher_1.ShiftCipher.encrypt("test", 1), "UFTU");
        });
        it('should encrypt text when amount > 26', function () {
            assert.equal(shift_cipher_1.ShiftCipher.encrypt("test", 28), "VGUV");
        });
        it('should return the same text when amount = 26', function () {
            assert.equal(shift_cipher_1.ShiftCipher.encrypt("test", 26), "TEST");
        });
        it('should ignore special characters', () => {
            assert.equal(shift_cipher_1.ShiftCipher.encrypt("shift #@cipher", 1), "TIJGU #@DJQIFS");
        });
    });
    describe("Decryption Test", () => {
        it('should encrypt text with the specified amount', function () {
            assert.equal(shift_cipher_1.ShiftCipher.decrypt("uftu", 1), "TEST");
        });
        it('should encrypt text when amount > 26', function () {
            assert.equal(shift_cipher_1.ShiftCipher.decrypt("uftu", 28), "WHVW");
        });
        it('should return the same text when amount = 26', function () {
            assert.equal(shift_cipher_1.ShiftCipher.decrypt("test", 26), "TEST");
        });
        it('should ignore special characters', () => {
            assert.equal(shift_cipher_1.ShiftCipher.decrypt("tijgu #@djqifs", 1), "SHIFT #@CIPHER");
        });
    });
});
//# sourceMappingURL=shift-cipher.test.js.map