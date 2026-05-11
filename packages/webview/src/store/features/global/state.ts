import { pathnames } from '@jt-view-exports-svg/core'

import type { GlobalState } from '@/store/types/global'

const config = window.ViewExportsSVG.initConfiguration

const initialState: GlobalState = {
  snackbarAlert: {
    open: false,
    content: '',
    duration: 3000,
    severity: 'info',
    position: { vertical: 'bottom', horizontal: 'center' },
  },
  configuration: {
    defaultExpandAll: config._DEFAULT_EXPAND_ALL,
    defaultClicToOpenDevTools: config._DEFAULT_CLICK_TO_OPEN_DEV_TOOLS,
  },
  renderRoute: {
    path: pathnames.main,
  },
}

export default initialState
