import { runTests } from '@vscode/test-electron'
import * as fs from 'fs'
import * as path from 'path'
import { rimraf } from 'rimraf'

async function main(): Promise<void> {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = process.cwd()

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './suite/index')

    const mainUserDataDir = path.resolve(extensionDevelopmentPath, '.vscode-test/user-data')

    if (fs.existsSync(mainUserDataDir)) {
      rimraf.sync(mainUserDataDir)
    }

    // Download VS Code, unzip it and run the integration test
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [path.resolve(extensionDevelopmentPath, 'workspaceTest.code-workspace')],
    })
  } catch (err) {
    console.error('Failed to run tests', err)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
