import { useState } from 'react'

export const useSwitchDarkMode = (props: { keyMode: string }) => {
  const initialDarkMode = localStorage.getItem(props.keyMode) === 'true'

  const [checkedMode, setCheckedMode] = useState<boolean>(initialDarkMode)

  const onChangeMode = () => {
    setCheckedMode(!checkedMode)
    localStorage.setItem(props.keyMode, `${!checkedMode}`)
  }

  return { checkedMode, onChangeMode }
}
