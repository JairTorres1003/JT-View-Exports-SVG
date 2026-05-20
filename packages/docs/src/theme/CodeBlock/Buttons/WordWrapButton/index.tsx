import { translate } from '@docusaurus/Translate'
import { useCodeBlockContext } from '@docusaurus/theme-common/internal'
import { Button } from '@heroui/button'
import { Tooltip } from '@heroui/tooltip'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/CodeBlock/Buttons/WordWrapButton'
import { TextWrap } from 'lucide-react'
import type { ReactNode } from 'react'

export default function WordWrapButton({ className }: Props): ReactNode {
  const { wordWrap } = useCodeBlockContext()

  const canShowButton = wordWrap.isEnabled || wordWrap.isCodeScrollable
  if (!canShowButton) {
    return false
  }

  const title = translate({
    id: 'theme.CodeBlock.wordWrapToggle',
    message: 'Toggle word wrap',
    description: 'The title attribute for toggle word wrapping button of code block lines',
  })

  return (
    <Tooltip content={title} placement='top' showArrow>
      <Button
        isIconOnly
        onPress={() => wordWrap.toggle()}
        aria-label={title}
        title={title}
        size='sm'
        className={cn(
          'group bg-foreground/10 dark:bg-secondary-200/80 hover:bg-foreground/20 dark:hover:bg-secondary-200/90 transition-colors',
          className
        )}
      >
        <TextWrap size='1rem' className={cn('text-foreground/70 group-hover:text-foreground')} />
      </Button>
    </Tooltip>
  )
}
