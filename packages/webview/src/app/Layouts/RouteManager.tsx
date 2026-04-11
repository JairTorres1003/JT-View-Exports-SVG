import { lazy, Suspense } from 'react'

import IconClose from '@/assets/icons/functionalities/close'
import IconNavigateFill from '@/assets/icons/navigation/navigate-fill'
import { routes } from '@/config/routes/route'
import { useRouteManager } from '@/core/hooks/useRouteManager'

const DraggableSpeedDial = import.meta.env.DEV
  ? lazy(() => import('@/core/components/SpeedDial/DraggableSpeedDial/DraggableSpeedDial'))
  : () => null

const RouteManager = () => {
  const { onClose, onOpen, open, onSelect } = useRouteManager()

  if (!import.meta.env.DEV || !DraggableSpeedDial) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <DraggableSpeedDial
        actions={routes}
        storeKey='JT-SVG-speedDial-routeManager-position'
        ariaLabel='SpeedDial route manager'
        icon={<IconNavigateFill sx={{ transform: 'rotate(45deg) translate(0px, -2px)' }} />}
        openIcon={<IconClose />}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        onSelected={onSelect}
      />
    </Suspense>
  )
}

export default RouteManager
