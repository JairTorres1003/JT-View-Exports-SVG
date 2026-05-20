import { usePrismTheme } from '@docusaurus/theme-common'
import { useCodeBlockContext } from '@docusaurus/theme-common/internal'
import Prism from '@site/src/lib/prismjs/loader'
import type { Props } from '@theme/CodeBlock/Content'
import Line from '@theme/CodeBlock/Line'
import clsx from 'clsx'
import { Highlight } from 'prism-react-renderer'
import React, { type ComponentProps, type ReactNode } from 'react'

import styles from './styles.module.css'

// TODO Docusaurus v4: remove useless forwardRef
const Pre = React.forwardRef<HTMLPreElement, ComponentProps<'pre'>>((props, ref) => {
  return (
    <pre
      ref={ref}
      tabIndex={-1}
      {...props}
      className={clsx(
        props.className,
        styles.codeBlock,
        'thin-scrollbar !bg-content1 rounded-md border-2 border-primary/20'
      )}
    />
  )
})

function Code(props: ComponentProps<'code'>) {
  const { metadata } = useCodeBlockContext()
  return (
    <code
      {...props}
      className={clsx(
        props.className,
        styles.codeBlockLines,
        metadata.lineNumbersStart !== undefined && styles.codeBlockLinesWithNumbering
      )}
      style={{
        ...props.style,
        counterReset:
          metadata.lineNumbersStart === undefined
            ? undefined
            : `line-count ${metadata.lineNumbersStart - 1}`,
      }}
    />
  )
}

export default function CodeBlockContent({ className: classNameProp }: Props): ReactNode {
  const { metadata, wordWrap } = useCodeBlockContext()
  const prismTheme = usePrismTheme()
  const { code, language, lineNumbersStart, lineClassNames } = metadata

  return (
    <Highlight prism={Prism} theme={prismTheme} code={code} language={language}>
      {({ className, style, tokens: lines, getLineProps, getTokenProps }) => (
        <Pre ref={wordWrap.codeBlockRef} className={clsx(classNameProp, className)} style={style}>
          <Code>
            {lines.map((line, i) => (
              <Line
                // biome-ignore lint/suspicious/noArrayIndexKey: It's fine in this case
                key={`line-${i}`}
                line={line}
                getLineProps={getLineProps}
                getTokenProps={getTokenProps}
                classNames={lineClassNames[i]}
                showLineNumbers={lineNumbersStart !== undefined}
              />
            ))}
          </Code>
        </Pre>
      )}
    </Highlight>
  )
}
