import { Paper, styled } from '@mui/material'

const FloatingPuller = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  top: 10,
  left: 20,
  width: 90,
  height: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
  cursor: 'pointer',
  zIndex: theme.zIndex.drawer + 1,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: 'var(--JT-SVG-vscode-editorWidget-background)',
  color: 'var(--JT-SVG-vscode-editorWidget-foreground)',
  border: '1px solid var(--JT-SVG-vscode-sideBarSectionHeader-border)',
  '&:hover': {
    backgroundColor: 'var(--JT-SVG-vscode-editorHoverWidget-background)',
    color: 'var(--JT-SVG-vscode-editorHoverWidget-foreground)',
  },
}))

export default FloatingPuller
