import { useCallback, useEffect, useMemo, useState } from 'react'

import { isEmpty } from '@/utils/misc'

export interface UseDropOptions {
  anchorEl?: HTMLElement | Document
  onFiles?: (files: File[], event?: Event) => void
  onText?: (text: string, event?: Event) => void
  onUri?: (url: string[], event?: Event) => void
}

/**
 * Creates a process function to handle drop or paste events based on the provided options.
 *
 * The returned function processes the event and its associated DataTransfer object,
 * invoking the appropriate callback from the options depending on the type of data present:
 * - If a URI is found, calls `onUri`.
 * - If files are present, calls `onFiles`.
 * - If clipboard text is available, calls `onText`.
 *
 * @param options - Configuration object containing optional callbacks for handling URIs, files, and text.
 * @returns A function that processes an event and its DataTransfer, invoking the relevant callback.
 */
const createProcess = (options: UseDropOptions) => (event: Event, dataTransfer: DataTransfer) => {
  const codeUris = dataTransfer.getData('application/vnd.code.uri-list')
  const uri = dataTransfer.getData('text/uri-list')

  if (codeUris || uri) {
    const uriList = (codeUris || uri)?.split(/\r\n|\n/).filter((u) => u && !u.startsWith('#'))
    options?.onUri?.(uriList, event)
    return
  }

  if (!isEmpty(dataTransfer.files)) {
    options?.onFiles?.(Array.from(dataTransfer.files), event)
    return
  }

  if ((event as ClipboardEvent).clipboardData) {
    const text = (event as ClipboardEvent)?.clipboardData?.getData('text') ?? ''
    options?.onText?.(text, event)
  }
}

export const useDrop = (options: UseDropOptions = {}) => {
  const { anchorEl = document, onFiles, onText, onUri } = options

  const [over, setOverRaw] = useState(false)
  const setOver = useCallback(setOverRaw, [])

  const process = useMemo(() => createProcess(options), [onFiles, onText, onUri])

  useEffect(() => {
    const onDragOver = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
      setOver(true)
    }

    const onDragEnter = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
      setOver(true)
    }

    const onDragLeave = () => {
      setOver(false)
    }

    const onDragExit = () => {
      setOver(false)
    }

    const onDrop = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
      setOver(false)

      const { dataTransfer } = event as DragEvent
      if (dataTransfer) process(event, dataTransfer)
    }

    const onPaste = (event: Event) => {
      const { clipboardData } = event as ClipboardEvent
      if (clipboardData) process(event, clipboardData)
    }

    anchorEl.addEventListener('dragover', onDragOver)
    anchorEl.addEventListener('dragenter', onDragEnter)
    anchorEl.addEventListener('dragleave', onDragLeave)
    anchorEl.addEventListener('dragexit', onDragExit)
    anchorEl.addEventListener('drop', onDrop)
    anchorEl.addEventListener('paste', onPaste)

    return () => {
      anchorEl.removeEventListener('dragover', onDragOver)
      anchorEl.removeEventListener('dragenter', onDragEnter)
      anchorEl.removeEventListener('dragleave', onDragLeave)
      anchorEl.removeEventListener('dragexit', onDragExit)
      anchorEl.removeEventListener('drop', onDrop)
      anchorEl.removeEventListener('paste', onPaste)
    }
  }, [process])

  return { over }
}
