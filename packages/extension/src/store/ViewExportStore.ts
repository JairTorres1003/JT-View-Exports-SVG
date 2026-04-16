import type { ViewExportSVG } from '@jt-view-exports-svg/core'

class ViewExportStore {
  private static instance: ViewExportStore
  private items: ViewExportSVG[] = []
  private search: string = ''
  private totalSearchResults: number = 0

  private constructor() {}

  static getInstance(): ViewExportStore {
    if (!ViewExportStore.instance) {
      ViewExportStore.instance = new ViewExportStore()
    }
    return ViewExportStore.instance
  }

  getAll(): ViewExportSVG[] {
    return this.items
  }

  set(items: ViewExportSVG[]): void {
    this.items = items
  }

  update(id: string, data: Partial<ViewExportSVG>): void {
    const item = this.items.find((i) => i.groupKind.id === id)
    if (!item) return

    Object.assign(item, data)
  }

  remove(id: string): void {
    this.items = this.items.filter((i) => i.groupKind.id !== id)
  }

  clear(): void {
    this.items = []
  }

  clearSearch(): void {
    this.search = ''
    this.totalSearchResults = 0
  }

  getSearch(): string {
    return this.search
  }

  setSearch(search: string): void {
    this.search = search
  }

  getTotalSearchResults(): number {
    return this.totalSearchResults
  }

  setTotalSearchResults(count: number): void {
    this.totalSearchResults = count
  }
}

export const viewExportStore = ViewExportStore.getInstance()
