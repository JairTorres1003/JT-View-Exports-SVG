import { type ConfigurationTarget, workspace } from 'vscode'

/**
 * Manages the extension configuration for a specific section.
 * @template T The type of the configuration value.
 */
export default class ConfigManagerController<T> {
  private readonly configName: string = 'JT-View-Exports-SVG'
  private readonly config = workspace.getConfiguration(this.configName)
  private readonly section: string
  private readonly initialValue: T

  /**
   * Creates an instance of ConfigManagerController.
   * @param section The section of the configuration to manage.
   * @param initialValue The initial value of the configuration section.
   */
  constructor(section: string, initialValue: T) {
    this.section = section
    this.initialValue = initialValue
  }

  /**
   * Gets the name of the configuration.
   */
  public get _configName(): string {
    return this.configName
  }

  /**
   * Gets the section of the configuration.
   */
  public get _section(): string {
    return this.section
  }

  /**
   * Gets the initial value of the configuration section.
   */
  public get _initialValue(): T {
    return this.initialValue
  }

  /**
   * Gets the value of the configuration section.
   * @returns The value of the configuration section.
   */
  get(): T {
    return this.config.inspect(this.section)?.workspaceValue as T
  }

  /**
   * Inspects the configuration section.
   * @returns The inspected value of the configuration section.
   */
  inspect(): T {
    return this.config.inspect(this.section)?.globalValue as T
  }

  /**
   * Updates the value of the configuration section.
   * @param value The new value to set.
   * @param target The target to which the configuration should be updated.
   */
  async update(value: T, target: ConfigurationTarget): Promise<void> {
    await this.config.update(this.section, value, target)
  }

  /**
   * Resets the configuration section to its initial value.
   * @param target The target to which the configuration should be deleted.
   */
  async reset(target: ConfigurationTarget): Promise<void> {
    await this.config.update(this.section, this.initialValue, target)
  }
}
