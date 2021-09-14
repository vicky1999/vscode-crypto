import * as vscode from 'vscode';
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
                if(type==="encryption") { 
                    vscode.window.showInformationMessage("Encrypted Text: "+ShiftCipher.encrypt(text, amount));
                }
                else {
                    // ShiftCipher.decrypt(text, amount);
                }
            });
            break;
    }
}
