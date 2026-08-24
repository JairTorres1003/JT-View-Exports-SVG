import BrowserOnly from '@docusaurus/BrowserOnly'
import { translate } from '@docusaurus/Translate'
import type { ColorMode } from '@docusaurus/theme-common'
import useIsBrowser from '@docusaurus/useIsBrowser'
import { Button, Tooltip } from '@heroui/react'
import { useAnimatedThemeToggler } from '@site/src/hooks/useAnimatedThemeToggler'
import { cn } from '@site/src/lib/utils'
import { Moon, Sun } from 'lucide-react'
import React, { type FC } from 'react'

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
    disabledTooltip?: boolean
    placement?: 'top' | 'bottom' | 'left' | 'right'
  }
}

const AnimatedThemeToggler: FC<AnimatedThemeTogglerProps> = ({ className, config }) => {
  const { isDark, toggleTheme } = useAnimatedThemeToggler()
  const isBrowser = useIsBrowser()

  const ariaLabel = getColorModeAriaLabel(isDark ? 'dark' : 'light')

  return (
    <Tooltip delay={0} isDisabled={config?.disabledTooltip}>
      <Button
        isIconOnly
        size='sm'
        variant='ghost'
        onPress={toggleTheme}
        isDisabled={!isBrowser}
        className={cn('text-foreground w-8 h-8', className)}
        aria-label={ariaLabel}
      >
        {isDark ? (
          <Sun size='1.2rem' className='h-5 w-5' />
        ) : (
          <Moon size='1.2rem' className='h-5 w-5' />
        )}
        <span className='sr-only'>{getColorModeLabel(isDark ? 'dark' : 'light')}</span>
      </Button>

      <Tooltip.Content showArrow placement={config?.placement}>
        <Tooltip.Arrow />
        {translate(
          {
            message: 'Toggle {mode} mode',
            id: 'theme.colorToggle.tooltip',
            description: 'The tooltip for the color mode toggle',
          },
          {
            mode: isDark ? 'light' : 'dark',
          }
        )}
      </Tooltip.Content>
    </Tooltip>
  )
}

const ThemeToggler: FC<AnimatedThemeTogglerProps> = (props) => {
  return <BrowserOnly>{() => <AnimatedThemeToggler {...props} />}</BrowserOnly>
}

export default React.memo(ThemeToggler)
