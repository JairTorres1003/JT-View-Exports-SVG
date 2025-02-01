import ConfigManagerController from './ConfigManagerController'

/**
 * The DefaultClickToOpenDevTools class.
 * This class provides a method to retrieve the property from the DefaultClickToOpenDevTools class.
 */
export class DefaultClickToOpenDevToolsController extends ConfigManagerController<boolean> {
  constructor() {
    super('defaultClickToOpenDevTools', false)
  }

  /**
   * Determines if the default click to open dev tools setting is enabled.
   * @returns {boolean} - Returns true if the default click to open dev tools setting is enabled, otherwise false.
   */
  public isDefaultOpen(): boolean {
    return this.inspect()
  }
}
