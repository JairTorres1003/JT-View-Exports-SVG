import { Resizable as ReactResizable, type ResizableProps } from 're-resizable'
import React, { type FC } from 'react'

export const Resizable: FC<Omit<ResizableProps, 'size'>> = ({
  onResizeStop = () => {},
  ...props
}) => {
  const [resizableWidth, setResizableWidth] = React.useState('100%')

  return (
    <ReactResizable
      minWidth={300}
      maxWidth='100%'
      minHeight='100%'
      maxHeight='100%'
      enable={{ right: true }}
      size={{ width: resizableWidth, height: '100%' }}
      defaultSize={{ width: '100%', height: '100%' }}
      onResizeStop={(_, __, ref, ...rest) => {
        const width = (window.innerWidth * parseFloat(ref.style.width)) / 100
        const minExpander = 80

        if (window.innerWidth - width > minExpander) {
          const minWidth = document.getElementById('BoxDevTools')?.clientWidth ?? 170
          const percentage = (minWidth * 100) / window.innerWidth
          setResizableWidth(`${100 - percentage}%`)
        } else {
          setResizableWidth('100%')
        }

        onResizeStop(_, __, ref, ...rest)
      }}
      {...props}
    />
  )
}
