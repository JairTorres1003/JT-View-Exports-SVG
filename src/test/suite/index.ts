import * as path from 'path'

import { glob } from 'glob'
import * as Mocha from 'mocha'

export async function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'tdd',
    color: true,
  })

  const testsRoot = path.resolve(__dirname, '..')

  await new Promise((resolve, reject) => {
    glob('**/**.test.js', { cwd: testsRoot })
      .then((files) => {
        // Add files to the test suite
        files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)))

        try {
          mocha.run((failures) => {
            if (failures > 0) {
              reject(new Error(`${failures} tests failed.`))
            } else {
              resolve('Tests passed')
            }
          })
        } catch (error) {
          console.error(error)
          reject(error)
        }
      })
      .catch(reject)
  })
}
