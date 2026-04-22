import { AssetsPathsConfig } from '../AssetsPathsConfig'
import { DefaultClickToOpenDevToolsConfig } from '../DefaultClickToOpenDevToolsConfig'
import { DefaultExpandAllConfig } from '../DefaultExpandAllConfig'
import { DefaultIconPropertiesConfig } from '../DefaultIconPropertiesConfig'
import { GroupPatternsConfig } from '../GroupPatternsConfig'
import { IgnoreDirectoriesConfig } from '../IgnoreDirectoriesConfig'
import { LastScanDateConfig } from '../LastScanDateConfig'
import { RecentIconsLimitConfig, RecentIconsShowConfig } from '../RecentIconsConfig'
import { ShowNotExportedIconsConfig } from '../ShowNotExportedIconsConfig'

import type { ConfigMap } from './ConfigRegistry'

export function createConfigs() {
  return {
    assetsPath: new AssetsPathsConfig(),
    defaultClickToOpenDevTools: new DefaultClickToOpenDevToolsConfig(),
    defaultExpandAll: new DefaultExpandAllConfig(),
    defaultIconProperties: new DefaultIconPropertiesConfig(),
    groupPatterns: new GroupPatternsConfig(),
    ignoreDirectories: new IgnoreDirectoriesConfig(),
    lastScanDate: new LastScanDateConfig(),
    recentIconsShow: new RecentIconsShowConfig(),
    recentIconsLimit: new RecentIconsLimitConfig(),
    showNotExportedIcons: new ShowNotExportedIconsConfig(),
  } satisfies ConfigMap
}
