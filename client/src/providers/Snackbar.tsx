import { Alert, Slide, type SlideProps, Snackbar } from '@mui/material'
import { Fragment, useEffect, useState, type FC } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { useAlert } from '@/core/hooks/useAlert'

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
  const { content, duration, open, action, icon, position, severity, showCloseButton, maxWidth } =
    useSelector((state) => state.global.snackbarAlert)

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
      <Alert
        severity={severity}
        action={action}
        icon={icon}
        sx={{ maxWidth }}
        elevation={5}
        onClose={
          showCloseButton
            ? (e) => {
                onClose(e, 'timeout')
              }
            : undefined
        }
      >
        {content}
      </Alert>
    </Snackbar>
  )
}

export const SnackbarProvider: FC<React.PropsWithChildren> = ({ children }): React.ReactNode => (
  <Fragment>
    {children}
    <SnackbarAlert />
  </Fragment>
)
