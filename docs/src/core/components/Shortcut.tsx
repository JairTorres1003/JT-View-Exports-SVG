import { Kbd, type KbdProps } from '@heroui/kbd'
import { memo, useEffect, useState } from 'react'

export interface ShortcutProps extends Omit<KbdProps, 'keys'> {
  mac: KbdProps['keys']
  windows: KbdProps['keys']
  linux?: KbdProps['keys']
  /**
   * The OS to use when rendering the shortcut.
   * @default 'mac'
   */
  defaultOS?: 'mac' | 'windows' | 'linux'
  /**
   * The OS to use when rendering the shortcut (controlled).
   */
  valueOS?: 'mac' | 'windows' | 'linux'
}

function Shortcut({ mac, windows, linux, defaultOS = 'mac', valueOS, ...props }: ShortcutProps) {
  const [os, setOS] = useState<'mac' | 'windows' | 'linux'>(defaultOS)

  useEffect(() => {
    if (typeof navigator === 'undefined') return

    // Prefer User-Agent Client Hints when available, fall back to userAgent string.
    const uaData = (navigator as { userAgentData?: { platform: string } }).userAgentData
    const platform = uaData?.platform || navigator.userAgent || ''

    const p = platform.toLowerCase()

    if (p.includes('mac') || p.includes('iphone') || p.includes('ipad') || p.includes('ios')) {
      setOS('mac')
    } else if (p.includes('win')) {
      setOS('windows')
    } else if (p.includes('linux')) {
      setOS('linux')
    }
  }, [])

  const osToUse = valueOS || os
  const keys = osToUse === 'mac' ? mac : osToUse === 'windows' ? windows : linux || windows

  return <Kbd keys={keys} {...props} />
}

const MemoShortcut = memo(Shortcut)

MemoShortcut.displayName = 'Shortcut'

export default MemoShortcut
