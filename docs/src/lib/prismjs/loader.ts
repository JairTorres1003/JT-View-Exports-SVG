import { Prism } from 'prism-react-renderer'

// Define global Prism for prismjs to use
;(typeof global !== 'undefined' ? global : window).Prism = Prism

// Import additional languages you may need here
await import('prismjs/components/prism-bash')

// extend more languages as needed
Prism.languages['bash-vscode'] = Prism.languages.extend('bash', {
  command: {
    pattern: /^[\t ]*\b[a-zA-Z0-9_.-]+\b(?=\s)/m,
    alias: 'function',
  },
  flag: {
    pattern: /--?[a-zA-Z0-9-]+/,
    alias: 'keyword',
  },
  parameter: {
    pattern: /\b[\w.-]+\.[\w.-]+\b/,
    alias: 'string',
  },
})

export default Prism
