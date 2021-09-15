"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const processor_1 = require("./processor");
const ciphers_1 = require("./crypto/ciphers");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-crypto" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let encryption = vscode.commands.registerCommand('vscode-crypto.encrypt', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World Encryption');
        // console.log(ciphers[0].cipher.encrypt("test",1));
        vscode.window.showInputBox({
            title: "Text Encryption",
            placeHolder: "Enter the text"
        }).then(text => {
            vscode.window.showQuickPick(ciphers_1.ciphers, {
                placeHolder: "Select a cipher",
                title: "Encryption"
            }).then(value => {
                // console.log("Selected: ",value);
                // vscode.window.showInformationMessage("Text: "+text);
                // vscode.window.showInformationMessage("Selected: "+value);
                text = text ? text : '';
                value = value ? value : '';
                (0, processor_1.processInput)(text, value, "encryption");
            });
        });
    });
    let decryption = vscode.commands.registerCommand('vscode-crypto.decrypt', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World Decryption');
        vscode.window.showInputBox({
            title: "Text Encryption",
            placeHolder: "Enter the text"
        }).then(text => {
            vscode.window.showQuickPick(ciphers_1.ciphers, {
                placeHolder: "Select a cipher",
                title: "Decryption"
            }).then(value => {
                // console.log("Selected: ",value);
                // vscode.window.showInformationMessage("Text: "+text);
                // vscode.window.showInformationMessage("Selected: "+value);
                text = text ? text : '';
                value = value ? value : '';
                (0, processor_1.processInput)(text, value, "decryption");
            });
        });
    });
    context.subscriptions.push(encryption);
    context.subscriptions.push(decryption);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map