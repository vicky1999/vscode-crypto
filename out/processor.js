"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processInput = void 0;
const vscode = require("vscode");
const shift_cipher_1 = require("./crypto/shift.cipher");
function processInput(text, cipher, type) {
    switch (cipher) {
        case "Shift Cipher":
            vscode.window.showInputBox({
                placeHolder: 'Enter the amount'
            }).then(value => {
                let amount = parseInt(value ? value : '0');
                if (!amount) {
                    vscode.window.showErrorMessage("Amount should be an integer");
                    return;
                }
                if (type === "encryption") {
                    vscode.window.showInformationMessage("Encrypted Text: " + shift_cipher_1.ShiftCipher.encrypt(text, amount));
                }
                else {
                    vscode.window.showInformationMessage("Decrypted Text: " + shift_cipher_1.ShiftCipher.decrypt(text, amount));
                }
            });
            break;
    }
}
exports.processInput = processInput;
//# sourceMappingURL=processor.js.map