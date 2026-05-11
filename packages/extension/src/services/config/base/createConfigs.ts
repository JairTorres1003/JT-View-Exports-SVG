import { AssetsPathsConfig } from '../AssetsPathsConfig'
import { DefaultClickToOpenDevToolsConfig } from '../DefaultClickToOpenDevToolsConfig'
import { DefaultExpandAllConfig } from '../DefaultExpandAllConfig'
import { DefaultIconPropertiesConfig } from '../DefaultIconPropertiesConfig'
import { GroupPatternsConfig } from '../GroupPatternsConfig'
import { IconCollectionConfig } from '../IconCollectionConfig'
import { IgnoreDirectoriesConfig } from '../IgnoreDirectoriesConfig'
import { LastScanDateConfig } from '../LastScanDateConfig'
import { ShowNotExportedIconsConfig } from '../ShowNotExportedIconsConfig'

import type { ConfigMap } from './ConfigRegistry'

export function createConfigs() {
  return {
    assetsPath: new AssetsPathsConfig(),
    defaultClickToOpenDevTools: new DefaultClickToOpenDevToolsConfig(),
    defaultExpandAll: new DefaultExpandAllConfig(),
    defaultIconProperties: new DefaultIconPropertiesConfig(),
    groupPatterns: new GroupPatternsConfig(),
    iconCollection: new IconCollectionConfig(),
    ignoreDirectories: new IgnoreDirectoriesConfig(),
    lastScanDate: new LastScanDateConfig(),
    showNotExportedIcons: new ShowNotExportedIconsConfig(),
  } satisfies ConfigMap
}
