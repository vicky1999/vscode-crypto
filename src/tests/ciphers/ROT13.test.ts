import { Rot13 } from "../../crypto/rot13.cipher";

var assert = require('assert');

describe('ROT13 Cipher Test', function() {
  describe("Encryption Test", () => {
    it('should encrypt text using ROT13 Cipher', function() {
        assert.equal(Rot13.encrypt("test"),"GRFG");
    });
    
    it('should ignore spaces while enrypting', function() {
      assert.equal(Rot13.encrypt("test encryption"),"GRFG RAPELCGVBA");
    });
    
    it('should ignore special characters while enrypting', function() {
      assert.equal(Rot13.encrypt("test #@! encryption"),"GRFG #@! RAPELCGVBA");
    });
  });

  describe("Decryption Test", () => {
    it('should decrypt text using ROT13 Cipher', function() {
        assert.equal(Rot13.encrypt("RAPELCGVBA"),"ENCRYPTION");
    });

    it('should ignore spaces while decrypting', function() {
        assert.equal(Rot13.encrypt("RAPELCGVBA GRFG"),"ENCRYPTION TEST");
    });

    it('should ignore special characters while decrypting', function() {
        assert.equal(Rot13.encrypt("RAPELCGVBA !@# GRFG"),"ENCRYPTION !@# TEST");
    });
  });
});
