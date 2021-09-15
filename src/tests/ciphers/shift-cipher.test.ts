import { ShiftCipher } from "../../crypto/shift.cipher";

var assert = require('assert');

describe('Shift Cipher Test', function() {
  describe("Encryption Test", () => {
    it('should encrypt text with the specified amount', function() {
      assert.equal(ShiftCipher.encrypt("test",1), "UFTU");
    });
    it('should encrypt text when amount > 26', function() {
      assert.equal(ShiftCipher.encrypt("test",28), "VGUV");
    });
    it('should return the same text when amount = 26', function() {
      assert.equal(ShiftCipher.encrypt("test",26), "TEST");
    });
    it('should ignore special characters', () => {
      assert.equal(ShiftCipher.encrypt("shift #@cipher",1), "TIJGU #@DJQIFS");
    });
  });

  describe("Decryption Test", () => {
    it('should decrypt text with the specified amount', function() {
      assert.equal(ShiftCipher.decrypt("uftu",1), "TEST");
    });
    it('should decrypt text when amount > 26', function() {
      assert.equal(ShiftCipher.decrypt("uftu",28), "SDRS");
    });
    it('should return the same text when amount = 26', function() {
      assert.equal(ShiftCipher.decrypt("test",26), "TEST");
    });
    it('should ignore special characters', () => {
      assert.equal(ShiftCipher.decrypt("tijgu #@djqifs",1), "SHIFT #@CIPHER");
    });
  });
});
