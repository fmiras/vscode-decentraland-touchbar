import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  const dclPreview = vscode.commands.registerCommand('extension.runDclPreview', () => {
    const terminal: vscode.Terminal = vscode.window.createTerminal('Decentraland Preview')
    terminal.show()
    terminal.sendText('dcl preview')
  })

  const dclDeploy = vscode.commands.registerCommand('extension.runDclDeploy', () => {
    const terminal: vscode.Terminal = vscode.window.createTerminal('Decentraland Deploy')
    terminal.show()
    terminal.sendText('dcl deploy')
  })

  context.subscriptions.push(dclPreview)
  context.subscriptions.push(dclDeploy)
}
