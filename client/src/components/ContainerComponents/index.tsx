import { useEffect } from 'react'

import { useSelector } from '@/providers/redux/store'

export const ContainerComponents = () => {
  const { components } = useSelector((state) => state.svg)

  useEffect(() => {
    console.log(components)
  }, [components])

  return <div>ContainerComponents</div>
}
