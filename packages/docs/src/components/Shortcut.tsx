import { Kbd, type KbdAbbrProps, type KbdProps } from '@heroui/react'
import { memo, useEffect, useState } from 'react'
import { cn } from '../lib/utils'

export interface ShortcutProps extends KbdProps {
  mac: KbdAbbrProps['keyValue'][]
  windows: KbdAbbrProps['keyValue'][]
  linux?: KbdAbbrProps['keyValue'][]
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

function Shortcut({
  mac,
  windows,
  linux,
  defaultOS = 'mac',
  valueOS,
  className,
  children,
  ...props
}: ShortcutProps) {
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

  return (
    <Kbd
      {...props}
      className={cn(
        'bg-accent/10 text-accent dark:bg-foreground/10 dark:text-foreground/80 px-2 py-1 gap-0.5 shadow-none rounded-xs h-auto',
        className
      )}
    >
      {keys.map((key) => (
        <Kbd.Abbr keyValue={key} key={key} />
      ))}
      <Kbd.Content>{children}</Kbd.Content>
    </Kbd>
  )
}

const MemoShortcut = memo(Shortcut)

MemoShortcut.displayName = 'Shortcut'

export default MemoShortcut
