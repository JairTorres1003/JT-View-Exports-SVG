import { ExtensionContext, commands, languages, window, WebviewPanel } from "vscode";


// this method is called when your extension is activated
export function activate(context: ExtensionContext) {
  console.log(
    'Congratulations, your extension "JT-View-Exports-SVG" is now active!'
  );

  // Registro del menú contextual

  const webviewPanels: Map<string, WebviewPanel> = new Map();
  const regexp: RegExp = /.+\.svg$/i;

  context.subscriptions.push(
    commands.registerCommand(
      "JT-View-Exports-SVG.showMenu",
      (item: any, items: any[]) => {
        const selectedFiles: any[] = [];
        const selectedFolders: any[] = [];
        console.log({item, items});
        window.showInformationMessage("Hello, View Exports SVG!");
      }
    )
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
