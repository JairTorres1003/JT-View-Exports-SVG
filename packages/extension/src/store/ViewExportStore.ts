import type { FileIdentifier, SVGFile, ViewExportSVG } from '@jt-view-exports-svg/core'

class ViewExportStore {
  private static instance: ViewExportStore
  private items: ViewExportSVG[] = []
  private files: Record<FileIdentifier, SVGFile> = {}
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

  getFiles(): Record<FileIdentifier, SVGFile> {
    return this.files
  }

  set(items: ViewExportSVG[], files: SVGFile[] = []): void {
    this.items = items

    this.files = files.reduce(
      (acc, file) => {
        acc[file.id] = file
        return acc
      },
      {} as Record<FileIdentifier, SVGFile>
    )
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
    this.files = {}
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
