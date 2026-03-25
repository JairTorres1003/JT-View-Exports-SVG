import { createRouter } from '@jt-view-exports-svg/extension-api/messaging/createRouter'
import type { Request, Response } from 'express'

import { HttpMessenger } from '../adapters/http-messenger'

/**
 * Handles incoming API requests and routes them to the appropriate handler.
 *
 * @param req - The incoming HTTP request object containing method, params, and body
 * @param res - The HTTP response object used to send responses back to the client
 *
 * @returns A promise that resolves when the request has been processed and a response sent
 *
 * @remarks
 * - For POST requests, extracts data from the request body and routes based on the message type
 * - For other HTTP methods, routes based on the message type without data
 * - Returns a 404 error if no handler is found for the given message type
 * - Returns a 500 error if an exception occurs during request handling
 */
export async function apiHandler(req: Request, res: Response) {
  try {
    const messenger = new HttpMessenger(res)
    const router = createRouter(messenger)

    const type = typeof req.params.path === 'string' ? req.params.path : req.params.path.join('/')

    const data = req.method === 'POST' ? req.body?.data : undefined

    const handled = await router.route({ type, data })

    if (!handled) {
      res.status(404).json({ error: `No handler found for message type: ${type}` })
    }

    if (!res.headersSent) {
      res.status(200).json({ success: true })
    }
  } catch (error) {
    console.error('Error handling request:', error)

    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
