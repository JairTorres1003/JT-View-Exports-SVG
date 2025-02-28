import { useMemo } from 'react'

import { useSelector } from '@/providers/redux/store'

interface EditorPlaygroundHook {
  defaultValue: string
}

export const useEditorPlayground = (): EditorPlaygroundHook => {
  const recentlySelected = useSelector((state) => state.global.recentlySelected)

  const defaultValue = useMemo(() => {
    if (!recentlySelected) return ''

    return `<${recentlySelected.name} />`
  }, [recentlySelected])

  return { defaultValue }
}
