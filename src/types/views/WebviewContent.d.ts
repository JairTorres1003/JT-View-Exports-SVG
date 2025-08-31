export interface ManifestContent {
  'index.html': ManifestIndexHTML
  'favicon.ico': ManifestAsset
}

export interface ManifestFile {
  file: string
  name: string
}

export interface ManifestAsset {
  file: string
  src: string
}

export interface ManifestIndexHTML extends ManifestFile {
  src: string
  isEntry: boolean
  dynamicImports: string[]
  css: string[]
  assets: string[]
}
