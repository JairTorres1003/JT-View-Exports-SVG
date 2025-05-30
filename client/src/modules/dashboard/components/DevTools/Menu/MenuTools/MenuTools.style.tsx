import { makeStyles } from 'tss-react/mui'

export const useMenuToolsStyles = makeStyles()(({ palette }) => ({
  paper: {
    borderRadius: '6px',
    backdropFilter: 'blur(5px)',
    background: 'rgba(227, 226, 229, 0.90)',
    border: '1px solid #BCBCBC',
    color: '#000',
  },
  menuItem: {
    padding: '6px 10px',
    height: 26.5,
    borderRadius: '4px',
    minHeight: 0,
    fontFamily: 'var(--vscode-font-family)',
    fontWeight: 'var(--vscode-font-weight)',
    fontSize: 'calc(var(--vscode-font-size, 13px) + 1px)',
    '&:hover': {
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
    },
  },
}))
