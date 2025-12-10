const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { init_pitonico, translate_to_pitonico, translate_from_pitonico } = require('../module/pitonico_cjs.js');

function activate(context) {
    const runPi = vscode.commands.registerCommand('pitonico.runPi', async () => {
        await init_pitonico();
        const originalCode = vscode.window.activeTextEditor.document.getText();
        const translatedCode = translate_from_pitonico(originalCode);
        // save to py file and run
        const editor = vscode.window.activeTextEditor;
        const currentFilePath = editor.document.uri.fsPath;
        const currentDir = path.dirname(currentFilePath);
        const originalFileName = path.basename(currentFilePath, '.pi');
        const tempFilePath = path.join(currentDir, originalFileName + '_translated.py');

        fs.writeFileSync(tempFilePath, translatedCode, 'utf8');

        // Get the Python interpreter used by VS Code
        const pythonInterpreter = vscode.workspace.getConfiguration('python').get('defaultInterpreterPath') || 'python';
        
        // Find an existing terminal or create one if none exist
        let terminal = vscode.window.terminals.find(term => term.name === 'Pi Script Runner');
        if (!terminal) {
            terminal = vscode.window.createTerminal({ name: 'Pi Script Runner', iconPath: new vscode.ThemeIcon('play') });
        }

        terminal.show();
        terminal.sendText(`${pythonInterpreter} "${tempFilePath}"`);
    });

    const pyToPi = vscode.commands.registerCommand('pitonico.pyToPi', async () => {
        await init_pitonico();
        const originalCode = vscode.window.activeTextEditor.document.getText();
        const translatedCode = translate_to_pitonico(originalCode);

        // translate code to pi
        const editor = vscode.window.activeTextEditor;
        const filePath = editor.document.uri.fsPath;

        fs.writeFileSync(filePath, translatedCode, 'utf8');
        editor.document.save();
    });

    context.subscriptions.push(runPi, pyToPi);
}

function deactivate() {}

module.exports = { activate, deactivate };
