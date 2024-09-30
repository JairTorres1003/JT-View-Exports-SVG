import ExtensionConfigManager from './configManager'

/**
 * Group patterns for the icons.
 * This object provides patterns for grouping the icons.
 */
export class GroupPatterns extends ExtensionConfigManager<Record<string, string>> {
  private readonly groupPatterns: Record<string, string> = {}
  private readonly groupPatternsUser: Record<string, string> = {}

  constructor() {
    super('groupPatterns', {})
    this.groupPatterns = this.get() ?? {}
    this.groupPatternsUser = this.inspect() ?? {}
  }

  /**
   * Retrieves all patterns from the GroupPatterns class.
   */
  public getAllPatterns(): Record<string, string> {
    return {
      ...this._initialValue,
      ...this.groupPatternsUser,
      ...this.groupPatterns,
    }
  }

  /**
   * Retrieves all patterns as an array of strings.
   */
  public get _patterns(): string[] {
    return Object.keys(this.getAllPatterns())
  }

  /**
   * Retrieves the user-defined group patterns.
   */
  public get _patternsUser(): string[] {
    return Object.keys(this.groupPatternsUser)
  }

  /**
   * Retrieves all patterns as an array of key-value pairs.
   */
  public get _patternsArray(): Array<[string, string]> {
    return Object.entries(this.getAllPatterns())
  }
}
