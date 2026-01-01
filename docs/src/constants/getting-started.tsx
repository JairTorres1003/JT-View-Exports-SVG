import CodeBlock from '@theme/CodeBlock'
import CodeInline from '@theme/CodeInline'

import { FolderCode, Terminal } from 'lucide-react'

import Shortcut from '../components/Shortcut'
import { Link } from '@heroui/link'

export const ActivationMethods = [
  {
    icon: <FolderCode />,
    title: 'From the Explorer',
    description: (
      <>
        Right-click any folder or file containing SVG components and select{' '}
        <strong>"View Exports SVG 🔍"</strong> from the context menu.
      </>
    ),
  },
  {
    icon: <Terminal />,
    title: 'From the Command Palette',
    description: (
      <>
        Open the <strong>Command Palette</strong> (
        <Shortcut mac={['command', 'shift']} windows={['ctrl', 'shift']}>
          P
        </Shortcut>
        ), type <strong>"View Exports SVG: Start Scanning"</strong> and press Enter.
      </>
    ),
  },
]

export const InstallationMethods = [
  {
    title: 'VS Code Marketplace',
    children: (
      <div className='Installation-instructions'>
        <ol className='list-decimal pl-6'>
          <li>
            Open <strong>Visual Studio Code</strong>.
          </li>
          <li className='mt-3'>
            Go to the <strong>Extensions View</strong>(
            <Shortcut mac={['command', 'shift']} windows={['ctrl', 'shift']}>
              X
            </Shortcut>
            )
          </li>
          <li className='mt-3'>
            Search for <CodeInline>View Exports SVG</CodeInline>.
          </li>
          <li className='mt-3'>
            Click <strong>Install</strong> on the extension by <strong>Jair Torres</strong>.
          </li>
          <li className='mt-3'>Once installed, reload the editor if prompted.</li>
        </ol>

        <p>
          You can also{' '}
          <Link
            isExternal
            showAnchorIcon
            className='text-[#007acc]'
            href='https://marketplace.visualstudio.com/items?itemName=JairTorres1003.jt-view-exports-svg'
          >
            open the Marketplace page
          </Link>
        </p>
      </div>
    ),
  },
  {
    title: 'Command Line',
    children: (
      <CodeBlock
        language='bash-vscode'
        className='-m-4 [&_pre]:!border-0'
      >{`code --install-extension JairTorres1003.jt-view-exports-svg`}</CodeBlock>
    ),
  },
]
