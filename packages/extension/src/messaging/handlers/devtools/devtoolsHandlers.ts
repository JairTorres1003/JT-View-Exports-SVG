import { IsOpenDevToolsHandler } from './IsOpenDevToolsHandler'

export function createDevtoolsHandlers() {
  return [new IsOpenDevToolsHandler()]
}
