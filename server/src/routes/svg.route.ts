// @ts-types="npm:@types/express@4.17.15"
import { Router } from 'express'
import * as path from 'path'

import { REGEX_FILE } from '@/constants/regex.ts'

const router = Router()
const BASE_PATH = Deno.env.get('BASE_PATH') ?? ''

router.get('/get-components', function (_, res) {
  const examplesPath = path.join(BASE_PATH, '..', 'examples')

  const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []): string[] => {
    const files = Deno.readDirSync(dirPath)

    for (const dirEntry of files) {
      if (dirEntry.isDirectory) {
        arrayOfFiles = getAllFiles(path.join(dirPath, dirEntry.name), arrayOfFiles)
      } else {
        arrayOfFiles.push(path.join(dirPath, dirEntry.name))
      }
    }

    return arrayOfFiles
  }

  const allFiles = getAllFiles(path.join(examplesPath, 'typescript'))
    .concat(getAllFiles(path.join(examplesPath, 'javascript')))
    .filter((file) => REGEX_FILE.test(file))

  res.send(allFiles)
})

export const svgRoutes = Router().use('/svg', router)
