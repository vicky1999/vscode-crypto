import * as vscode from 'vscode';
import { Rot13 } from './crypto/rot13.cipher';
import { ShiftCipher } from './crypto/shift.cipher';

export function processInput(text: string, cipher: string, type: string) {
    switch(cipher) {
        case "Shift Cipher":
            vscode.window.showInputBox({
                placeHolder: 'Enter the amount'
            }).then(value => {
                let amount: number = parseInt(value ? value: '0');
                if(!amount) {
                    vscode.window.showErrorMessage("Amount should be an integer");
                    return;
                }
                if(type === "encryption") { 
                    vscode.window.showInformationMessage("Encrypted Text: "+ShiftCipher.encrypt(text, amount));
                }
                else {
                    vscode.window.showInformationMessage("Decrypted Text: "+ShiftCipher.decrypt(text, amount));
                }
            });
            break;

        case "ROT13 Cipher":
            if(type === "encryption") {
                vscode.window.showInformationMessage("Encrypted Text: "+Rot13.encrypt(text));
            }
            else {
                vscode.window.showInformationMessage("Decrypted Text: "+Rot13.decrypt(text));
            }
    }
}
