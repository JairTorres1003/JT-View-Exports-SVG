import React, { useCallback, useState, useRef, useEffect, type ReactNode } from 'react'
import { translate } from '@docusaurus/Translate'
import { useCodeBlockContext } from '@docusaurus/theme-common/internal'
import type { Props } from '@theme/CodeBlock/Buttons/CopyButton'
import { Button } from '@heroui/button'
import { Check, Copy } from 'lucide-react'
import { cn } from '@site/src/lib/utils'
import { Tooltip } from '@heroui/tooltip'

function title() {
  return translate({
    id: 'theme.CodeBlock.copy',
    message: 'Copy',
    description: 'The copy button label on code blocks',
  })
}

function ariaLabel(isCopied: boolean) {
  return isCopied
    ? translate({
        id: 'theme.CodeBlock.copied',
        message: 'Copied',
        description: 'The copied button label on code blocks',
      })
    : translate({
        id: 'theme.CodeBlock.copyButtonAriaLabel',
        message: 'Copy code to clipboard',
        description: 'The ARIA label for copy code blocks button',
      })
}

function useCopyButton() {
  const {
    metadata: { code },
  } = useCodeBlockContext()
  const [isCopied, setIsCopied] = useState(false)
  const copyTimeout = useRef<number | undefined>(undefined)

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true)
      copyTimeout.current = window.setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    })
  }, [code])

  useEffect(() => () => window.clearTimeout(copyTimeout.current), [])

  return { copyCode, isCopied }
}

export default function CopyButton({ className }: Props): ReactNode {
  const { copyCode, isCopied } = useCopyButton()

  return (
    <Tooltip content={isCopied ? ariaLabel(true) : title()} placement='top' showArrow>
      <Button
        isIconOnly
        onPress={copyCode}
        aria-label={ariaLabel(isCopied)}
        title={title()}
        size='sm'
        className={cn(
          'group bg-foreground/10 dark:bg-secondary-200/80 hover:bg-foreground/20 dark:hover:bg-secondary-200/90 transition-colors',
          className
        )}
      >
        <Copy
          size='1rem'
          className={cn(
            'absolute transition-opacity duration-200 text-foreground/70 group-hover:text-foreground',
            isCopied ? 'opacity-0' : 'opacity-100'
          )}
        />
        <Check
          size='1rem'
          className={cn(
            'absolute transition-opacity duration-200 text-success',
            isCopied ? 'opacity-100' : 'opacity-0'
          )}
        />
      </Button>
    </Tooltip>
  )
}
