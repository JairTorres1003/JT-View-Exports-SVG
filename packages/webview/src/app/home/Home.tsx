import { Stack } from '@mui/material'

import ContainerIcons from '@/features/home/components/ContainerIcons/ContainerIcons'
import DropZone from '@/features/home/components/DropZone/DropZone'
import { useHome } from '@/features/home/hooks/useHome'

const HomePage: React.FC = () => {
  useHome()

  return (
    <Stack sx={{ height: '100%', overflow: 'hidden' }}>
      <DropZone />
      <ContainerIcons />
    </Stack>
  )
}

export default HomePage
