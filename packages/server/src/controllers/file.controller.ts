// @ts-types="npm:@types/express@4.17.15"

import * as path from 'node:path'
import type { Request, Response } from 'express'

export class FileController {
  /**
   * Handles a request to open a file at a specified absolute path.
   *
   * @param req - Express request object containing the file path in `body.data.file.absolutePath`.
   * @param res - Express response object used to send the HTTP response.
   * @returns A JSON response indicating the result of the file open operation.
   */
  public openFile = async (req: Request, res: Response) => {
    const payload = req.body.data

    if (!payload.file?.absolutePath) {
      return res.status(400).json({ message: 'File path is required' })
    }

    try {
      const filePath = path.resolve(payload.file.absolutePath)

      await Deno.open(filePath)

      res.status(200).json({
        message: 'File opened successfully',
        filePath,
      })
    } catch (error) {
      console.error('Error opening file:', error)
      res.status(500).json({
        message: 'Error opening file',
        error,
      })
    }
  }
}
