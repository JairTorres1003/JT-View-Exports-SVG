import { expandedIcons, toggleDevTools } from '@/commands'
import type { FuncPostMessage } from '@/types/views/PostMessage'

export class UIHandler {
  constructor(private readonly postMessage: FuncPostMessage) {}

  async toggleExpandIcon(isExpanded: boolean): Promise<void> {
    try {
      await expandedIcons(isExpanded)
    } catch (error) {
      console.error(error)
    }
  }

  async toggleOpenDevTools(open: boolean): Promise<void> {
    try {
      await toggleDevTools(open)
    } catch (error) {
      console.error(error)
    }
  }
}
