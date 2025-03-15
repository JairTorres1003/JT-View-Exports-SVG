import { Alert, Slide, type SlideProps, Snackbar } from '@mui/material'
import { Fragment, useEffect, useState, type FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useAlert } from '@/core/hooks/useAlert'
import type { ProviderProps } from '@/interfaces/misc'
import { useSelector } from '@/providers/redux/store'

/**
 * SlideTransition component.
 *
 * @param props - SlideProps object containing the props for the Slide component.
 * @returns The rendered Slide component with the specified direction.
 */
function SlideTransition(props: SlideProps): React.ReactNode {
  const { position } = useSelector((state) => state.global.snackbarAlert)

  const { getTransitionDirection } = useAlert()

  return <Slide {...props} direction={getTransitionDirection(position)} />
}

/**
 * SnackbarAlert component.
 *
 * @returns The rendered SnackbarAlert component.
 */
const SnackbarAlert = (): React.ReactNode => {
  const { content, duration, open, action, icon, position, severity } = useSelector(
    (state) => state.global.snackbarAlert
  )

  const [key, setKey] = useState<string>('')
  const [currentContent, setCurrentContent] = useState<typeof content>('')

  const { onClose } = useAlert()

  useEffect(() => {
    if (open && content !== currentContent) {
      setKey(`snackbar-${uuidv4()}`)
      setCurrentContent(content)
    }
  }, [open, content])

  return (
    <Snackbar
      key={key}
      open={open}
      onClose={onClose}
      anchorOrigin={position}
      autoHideDuration={duration}
      slots={{
        transition: SlideTransition,
      }}
    >
      <Alert severity={severity} action={action} icon={icon} elevation={5}>
        {content}
      </Alert>
    </Snackbar>
  )
}

export const SnackbarProvider: FC<ProviderProps> = ({ children }): React.ReactNode => (
  <Fragment>
    {children}
    <SnackbarAlert />
  </Fragment>
)
