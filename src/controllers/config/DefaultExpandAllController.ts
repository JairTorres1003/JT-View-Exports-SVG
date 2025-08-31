import ConfigManagerController from './ConfigManagerController'

/**
 * The DefaultExpandAll class.
 * This class provides a method to retrieve the property from the DefaultExpandAll class.
 */
export class DefaultExpandAllController extends ConfigManagerController<boolean> {
  constructor() {
    super('defaultExpandAll', false)
  }

  /**
   * Determines if the default expand all setting is enabled.
   * @returns {boolean} - Returns true if the default expand all setting is enabled, otherwise false.
   */
  public isExpandAll(): boolean {
    return this.inspect()
  }
}
