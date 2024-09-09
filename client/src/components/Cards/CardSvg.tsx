import { Card, type CardProps, styled } from '@mui/material'

export const CardSvg = styled(
  ({ children, ...props }: CardProps & { children: React.ReactNode }) => (
    <Card {...props}>{children}</Card>
  )
)(() => ({}))
