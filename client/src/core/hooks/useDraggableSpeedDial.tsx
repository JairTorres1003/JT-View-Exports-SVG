import { useCallback, useEffect, useRef, useState } from 'react'

export type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const cornerPositions: Record<CornerPosition, 'up' | 'down' | 'left' | 'right'> = {
  'top-left': 'down',
  'top-right': 'down',
  'bottom-left': 'up',
  'bottom-right': 'up',
}

/**
 * Loads the saved position of the SpeedDial from local storage.
 * If no position is saved, it defaults to 'bottom-right'.
 *
 * @returns The saved or default position as a CornerPosition.
 */
const loadPositionFromStorage = (): CornerPosition => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('JT-SVG-speedDial-position')
    if (saved && Object.keys(cornerPositions).includes(saved)) {
      return saved as CornerPosition
    }
  }
  return 'bottom-right'
}

/**
 * Saves the current position of the SpeedDial to local storage.
 * This allows the position to persist across page reloads.
 *
 * @param newPosition - The new position to save.
 */
const savePositionToStorage = (newPosition: CornerPosition) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('JT-SVG-speedDial-position', newPosition)
  }
}

export const useDraggableSpeedDial = () => {
  const [position, setPosition] = useState<CornerPosition>(loadPositionFromStorage)
  const [isDragging, setIsDragging] = useState(false)
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [hoveredCorner, setHoveredCorner] = useState<CornerPosition | null>(null)
  const speedDialRef = useRef<HTMLDivElement>(null)

  /**
   * Determines the closest corner of the viewport to the given (x, y) coordinates.
   *
   * @param x - The x-coordinate to evaluate.
   * @param y - The y-coordinate to evaluate.
   * @returns The closest corner position as one of 'top-left', 'top-right', 'bottom-left', or 'bottom-right'.
   */
  const getClosestCorner = useCallback((x: number, y: number): CornerPosition => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const isLeft = x < windowWidth / 2
    const isTop = y < windowHeight / 2

    if (isTop && isLeft) return 'top-left'
    if (isTop && !isLeft) return 'top-right'
    if (!isTop && isLeft) return 'bottom-left'
    return 'bottom-right'
  }, [])

  /**
   * Handles the mouse down event to initiate dragging of the SpeedDial component.
   *
   * @param e - The mouse event triggered when the user presses the mouse button down on the SpeedDial.
   */
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!speedDialRef.current) return

    const rect = speedDialRef.current.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setDragPosition({
      x: rect.left,
      y: rect.top,
    })
    setIsDragging(true)

    e.preventDefault()
    e.stopPropagation()
  }, [])

  /**
   * Handles mouse movement events during a drag operation.
   *
   * @param e - The mouse event triggered during movement.
   */
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return

      const x = e.clientX - dragOffset.x
      const y = e.clientY - dragOffset.y

      setDragPosition({ x, y })

      const newCorner = getClosestCorner(x, y)
      setHoveredCorner(newCorner)
    },
    [isDragging, dragOffset, getClosestCorner]
  )

  /**
   * Handles the mouse up event to finalize the dragging of the SpeedDial component.
   */
  const handleMouseUp = useCallback(() => {
    if (isDragging && hoveredCorner) {
      setPosition(hoveredCorner)
      savePositionToStorage(hoveredCorner)
    }
    setIsDragging(false)
    setHoveredCorner(null)
  }, [isDragging, hoveredCorner])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  return {
    isDragging,
    speedDialRef,
    handleMouseDown,
    cornerPositions: Object.keys(cornerPositions) as CornerPosition[],
    positions: cornerPositions,
    position,
    dragPosition,
    hoveredCorner,
  }
}
