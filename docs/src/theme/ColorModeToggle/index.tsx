import React, { FC, useEffect } from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser'
import { translate } from '@docusaurus/Translate'
import type { ColorMode } from '@docusaurus/theme-common'

import { Moon, Sun } from 'lucide-react'
import { useAnimatedThemeToggler } from '@site/src/hooks/useAnimatedThemeToggler'
import { cn } from '@site/src/lib/utils'
import { Button } from '@heroui/button'
import { Tooltip, TooltipPlacement } from '@heroui/tooltip'

function getColorModeLabel(colorMode: ColorMode | null): string {
  switch (colorMode) {
    case null:
      return translate({
        message: 'system mode',
        id: 'theme.colorToggle.ariaLabel.mode.system',
        description: 'The name for the system color mode',
      })
    case 'light':
      return translate({
        message: 'light mode',
        id: 'theme.colorToggle.ariaLabel.mode.light',
        description: 'The name for the light color mode',
      })
    case 'dark':
      return translate({
        message: 'dark mode',
        id: 'theme.colorToggle.ariaLabel.mode.dark',
        description: 'The name for the dark color mode',
      })
    default:
      throw new Error(`unexpected color mode ${colorMode}`)
  }
}

function getColorModeAriaLabel(colorMode: ColorMode | null) {
  return translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the color mode toggle',
    },
    {
      mode: getColorModeLabel(colorMode),
    }
  )
}

interface AnimatedThemeTogglerProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'onChange'> {
  onChange?: (value: ColorMode | null) => void
  config?: {
    disableTooltip?: boolean
    placement?: TooltipPlacement
  }
}

export const AnimatedThemeToggler: FC<AnimatedThemeTogglerProps> = ({
  className,
  onChange = () => null,
  config,
}) => {
  const { isDark, toggleTheme } = useAnimatedThemeToggler()
  const isBrowser = useIsBrowser()

  useEffect(() => {
    if (!isBrowser) return
    onChange(isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <Tooltip
      content={translate(
        {
          message: 'Toggle {mode} mode',
          id: 'theme.colorToggle.tooltip',
          description: 'The tooltip for the color mode toggle',
        },
        {
          mode: isDark ? 'light' : 'dark',
        }
      )}
      size='sm'
      showArrow
      isDisabled={config?.disableTooltip}
      placement={config?.placement}
    >
      <Button
        isIconOnly
        size='sm'
        // ref={buttonRef}
        onPress={toggleTheme}
        disabled={!isBrowser}
        className={cn('bg-transparent hover:bg-gray-700/10 dark:hover:bg-foreground/15', className)}
        aria-label={getColorModeAriaLabel(isDark ? 'dark' : 'light')}
      >
        {isDark ? <Sun size='1.2rem' /> : <Moon size='1.2rem' />}
        <span className='sr-only'>{getColorModeLabel(isDark ? 'dark' : 'light')}</span>
      </Button>
    </Tooltip>
  )
}

export default React.memo(AnimatedThemeToggler)
