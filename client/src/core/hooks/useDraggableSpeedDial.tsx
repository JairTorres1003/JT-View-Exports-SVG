import { useCallback, useEffect, useRef, useState } from 'react'

export type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const cornerPositions: Record<CornerPosition, 'up' | 'down' | 'left' | 'right'> = {
  'top-left': 'down',
  'top-right': 'down',
  'bottom-left': 'up',
  'bottom-right': 'up',
}

const DRAG_THRESHOLD = 5 // Minimum distance in pixels to consider a drag action
const LONG_PRESS_DURATION = 3000 // Duration in milliseconds to recognize a long press

/**
 * Loads the saved position of the SpeedDial from local storage.
 * If no position is saved, it defaults to 'bottom-right'.
 *
 * @param key - The key under which the position is saved in local storage.
 * @returns The saved or default position as a CornerPosition.
 */
const loadPositionFromStorage = (key: string): CornerPosition => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key)
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
 * @param key - The key under which to save the position in local storage.
 * @param newPosition - The new position to save.
 */
const savePositionToStorage = (key: string, newPosition: CornerPosition) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, newPosition)
  }
}

export const useDraggableSpeedDial = (key: string) => {
  const [position, setPosition] = useState<CornerPosition>(loadPositionFromStorage(key))
  const [isDragging, setIsDragging] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCorner, setHoveredCorner] = useState<CornerPosition | null>(null)

  const speedDialRef = useRef<HTMLDivElement>(null)
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null)
  const dragActivatedRef = useRef(false)

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

  const activateDragging = useCallback((mouseX: number, mouseY: number) => {
    if (!speedDialRef.current || dragActivatedRef.current) return

    const rect = speedDialRef.current.getBoundingClientRect()
    setDragOffset({
      x: mouseX - rect.left,
      y: mouseY - rect.top,
    })
    setDragPosition({
      x: rect.left,
      y: rect.top,
    })
    setIsDragging(true)
    dragActivatedRef.current = true
  }, [])

  /**
   * Handles the mouse down event to initiate dragging of the SpeedDial component.
   *
   * @param e - The mouse event triggered when the user presses the mouse button down on the SpeedDial.
   */
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!speedDialRef.current) return

      setIsPressed(true)
      setInitialMousePosition({ x: e.clientX, y: e.clientY })
      dragActivatedRef.current = false

      longPressTimerRef.current = setTimeout(() => {
        if (isPressed && !isDragging) {
          activateDragging(e.clientX, e.clientY)
        }
      }, LONG_PRESS_DURATION)

      if (isDragging) {
        e.preventDefault()
        e.stopPropagation()
      }
    },
    [isPressed, isDragging, activateDragging]
  )

  /**
   * Handles mouse movement events during a drag operation.
   *
   * @param e - The mouse event triggered during movement.
   */
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isPressed && !isDragging && !dragActivatedRef.current) {
        const deltaX = Math.abs(e.clientX - initialMousePosition.x)
        const deltaY = Math.abs(e.clientY - initialMousePosition.y)

        if (deltaX > DRAG_THRESHOLD || deltaY > DRAG_THRESHOLD) {
          activateDragging(e.clientX, e.clientY)
        }
        return
      }

      if (isDragging) {
        const x = e.clientX - dragOffset.x
        const y = e.clientY - dragOffset.y

        setDragPosition({ x, y })

        const newCorner = getClosestCorner(x, y)
        setHoveredCorner(newCorner)
      }
    },
    [isPressed, isDragging, dragOffset, getClosestCorner, initialMousePosition, activateDragging]
  )

  /**
   * Handles the mouse up event to finalize any dragging operation or cancel press state.
   */
  const handleMouseUp = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current)
      longPressTimerRef.current = null
    }

    if (isDragging && hoveredCorner) {
      setPosition(hoveredCorner)
      savePositionToStorage(key, hoveredCorner)
    }

    setIsDragging(false)
    setIsPressed(false)
    setHoveredCorner(null)
    dragActivatedRef.current = false
  }, [isDragging, hoveredCorner])

  useEffect(() => {
    if (isPressed || isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isPressed, isDragging, handleMouseMove, handleMouseUp])

  useEffect(() => {
    return () => {
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current)
      }
    }
  }, [])

  return {
    isDragging,
    isPressed,
    speedDialRef,
    handleMouseDown,
    cornerPositions: Object.keys(cornerPositions) as CornerPosition[],
    positions: cornerPositions,
    position,
    dragPosition,
    hoveredCorner,
  }
}
