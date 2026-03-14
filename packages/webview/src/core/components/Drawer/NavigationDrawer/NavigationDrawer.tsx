import { IconButton, Stack, SwipeableDrawer } from '@mui/material'

import IconCollapse from '@/assets/icons/functionalities/collapse'
import IconExpand from '@/assets/icons/functionalities/expand'
import useNavigationDrawer from '@/core/hooks/useNavigationDrawer'

import FloatingPuller from './FloatingPuller'

const NavigationDrawer = () => {
  const { isOpen, isExpanded, toggleDrawer, toggleExpanded } = useNavigationDrawer()

  return (
    <>
      {!isOpen && <FloatingPuller onMouseEnter={toggleDrawer(true)} />}

      <SwipeableDrawer
        anchor='top'
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        slotProps={{
          swipeArea: { hidden: true },
          paper: {
            sx: {
              marginLeft: '20px',
              marginRight: 'auto',
              minWidth: '90px',
              width: 'fit-content',
              maxWidth: 'calc(100% - 40px)',
            },
          },
        }}
      >
        <Stack
          gap={0.5}
          p='12px 24px'
          direction='row'
          justifyContent='flex-start'
          onMouseLeave={toggleDrawer(false)}
        >
          <IconButton aria-label='Toggle Expanded Components' onClick={toggleExpanded}>
            {isExpanded ? <IconCollapse size={16} /> : <IconExpand size={16} />}
          </IconButton>
        </Stack>
      </SwipeableDrawer>
    </>
  )
}

export default NavigationDrawer
