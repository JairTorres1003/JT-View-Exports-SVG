import ExtensionConfigManager from './configManager'

/**
 * The ShowNotExportedIcons class.
 * This class provides a method to retrieve the property from the ShowNotExportedIcons class.
 */
export class ShowNotExportedIcons extends ExtensionConfigManager<boolean> {
  private readonly showNotExportedIcons: boolean = false
  private readonly showNotExportedIconsUser: boolean = false

  constructor() {
    super('showNotExportedIcons', false)
    this.showNotExportedIcons = this.get() ?? false
    this.showNotExportedIconsUser = this.inspect() ?? false
  }

  /**
   * Retrieves the property from the ShowNotExportedIcons class.
   */
  public isShow(): boolean {
    return this.showNotExportedIconsUser ?? this.showNotExportedIcons
  }
}
