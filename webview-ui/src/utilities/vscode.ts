import type { WebviewApi } from "vscode-webview";

interface MessageData {
  command: string;
  data: any;
}

class VSCodeAPIWrapper {
  private readonly vsCodeApi: WebviewApi<unknown> | undefined;
  private messageHandlers: Record<string, Function[]> = {};

  constructor() {
    if (typeof acquireVsCodeApi === "function") {
      this.vsCodeApi = acquireVsCodeApi();
    }

    // Escucha el evento `message` para recibir mensajes del webview
    window.addEventListener("message", (event) => {
      const message: MessageData = event.data;
      const handlers = this.messageHandlers[message.command];
      if (handlers) {
        handlers.forEach((handler) => handler(message.data));
      }
    });
  }

  public postMessage(command: string, data: any) {
    if (this.vsCodeApi) {
      this.vsCodeApi.postMessage({ command, data });
    } else {
      console.log("Post message:", { command, data });
    }
  }

  public onMessage(command: string, handler: Function) {
    if (!this.messageHandlers[command]) {
      this.messageHandlers[command] = [];
    }
    this.messageHandlers[command].push(handler);
  }

  public removeMessageHandler(command: string, handler: Function) {
    const handlers = this.messageHandlers[command];
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  }
}

export const vscode = new VSCodeAPIWrapper();
