import { useMemo } from 'react'
import { useSelector } from 'react-redux'

interface EditorPlaygroundHook {
  defaultValue: string
}

export const useEditorPlayground = (): EditorPlaygroundHook => {
  const recentlySelected = useSelector((state) => state.playground.recentlySelected)

  const defaultValue = useMemo(() => {
    if (!recentlySelected) return ''

    return `<${recentlySelected.name} />\n`
  }, [recentlySelected])

  return { defaultValue }
}
