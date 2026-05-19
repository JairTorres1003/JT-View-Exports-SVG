import { l10n } from 'vscode'

import { DEFAULT_ICON_PROPERTIES } from '@/constants/misc'

import type { ConfigNotification } from './base/ConfigManager'
import { ConfigManager } from './base/ConfigManager'

export class DefaultIconPropertiesConfig extends ConfigManager<Record<string, string>> {
  readonly section = 'defaultIconProperties'
  readonly defaultValue = DEFAULT_ICON_PROPERTIES
  override get notification(): ConfigNotification {
    return {
      message: l10n.t('Default icon properties changed. Reload the panel to apply.'),
    }
  }

  private currentProperties: Record<string, unknown> | null = null

  getAllProperties(): Record<string, unknown> {
    if (this.currentProperties) {
      return this.currentProperties
    }

    const properties: Record<string, unknown> = {
      ...this.defaultValue,
      ...this.getValue(),
    }

    for (const key in properties) {
      if (Object.hasOwn(properties, key)) {
        try {
          properties[key] = JSON.parse(properties[key] as string)
        } catch {
          if (properties[key] === 'undefined') {
            properties[key] = undefined
          } else if (properties[key] === 'null') {
            properties[key] = null
          }
        }
      }
    }

    this.currentProperties = properties

    return properties
  }

  _invalidate(): void {
    this.currentProperties = null
  }
}
