import { Stack } from '@mui/material'

import { ContainerComponents } from '@/features/dashboard/components/ContainerComponents'
import { SearchBar } from '@/features/dashboard/components/SearchBar'
import { useDashboard } from '@/features/dashboard/hooks/useDashboard'

const DashboardPage: React.FC = () => {
  useDashboard()

  return (
    <Stack sx={{ height: '100%', overflow: 'hidden' }}>
      <SearchBar />
      <ContainerComponents />
    </Stack>
  )
}

export default DashboardPage
