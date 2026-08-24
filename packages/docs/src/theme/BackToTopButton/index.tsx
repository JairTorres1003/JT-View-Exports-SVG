import { translate } from '@docusaurus/Translate'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { useBackToTopButton } from '@docusaurus/theme-common/internal'
import { Button, Tooltip } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import { ChevronUp } from 'lucide-react'
import type { ReactNode } from 'react'

export default function BackToTopButton(): ReactNode {
  const { shown, scrollToTop } = useBackToTopButton({ threshold: 300 })
  return (
    <Tooltip delay={0}>
      <Button
        isIconOnly
        onPress={scrollToTop}
        aria-label={translate({
          id: 'theme.BackToTopButton.buttonAriaLabel',
          message: 'Scroll back to top',
          description: 'The ARIA label for the back to top button',
        })}
        className={cn(
          ThemeClassNames.common.backToTopButton,
          'fixed bottom-5 right-5 z-30 h-10 w-10 rounded-full scale-0 transition-transform duration-300 ease-in-out bg-surface',
          shown && 'scale-100'
        )}
      >
        <ChevronUp size='1.5rem' className='w-5 h-5' />
      </Button>

      <Tooltip.Content showArrow placement='left'>
        <Tooltip.Arrow />
        {translate({
          id: 'theme.BackToTopButton.tooltip',
          message: 'Back to top',
          description: 'The tooltip for the back to top button',
        })}
      </Tooltip.Content>
    </Tooltip>
  )
}
