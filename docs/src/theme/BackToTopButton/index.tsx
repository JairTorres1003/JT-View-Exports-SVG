import React, { type ReactNode } from 'react'
import { translate } from '@docusaurus/Translate'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { useBackToTopButton } from '@docusaurus/theme-common/internal'

import { Button } from '@heroui/button'
import { ChevronUp } from 'lucide-react'
import { cn } from '@site/src/lib/utils'
import { Tooltip } from '@heroui/tooltip'

export default function BackToTopButton(): ReactNode {
  const { shown, scrollToTop } = useBackToTopButton({ threshold: 300 })
  return (
    <Tooltip
      size='sm'
      showArrow
      placement='left'
      content={translate({
        id: 'theme.BackToTopButton.tooltip',
        message: 'Back to top',
        description: 'The tooltip for the back to top button',
      })}
    >
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
          'fixed bottom-5 right-5 z-50 h-10 w-10 rounded-full scale-0 transition-transform duration-300 ease-in-out',
          shown && 'scale-100'
        )}
      >
        <ChevronUp size='1.5rem' />
      </Button>
    </Tooltip>
  )
}
