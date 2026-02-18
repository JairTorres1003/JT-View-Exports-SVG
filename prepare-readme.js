const fs = require('node:fs')

// Escape special regular expression characters in a string
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const filesToModify = ['./README.md']
const newUrl =
  'https://raw.githubusercontent.com/JairTorres1003/JT-View-Exports-SVG/main/assets/JT%20View%20Exports%20SVG%20-%20Demo.mp4'
const defaultUrl = 'https://github.com/user-attachments/assets/66020180-98ca-4ff8-adf4-0cc56526e6e3'

function replaceUrlInFiles() {
  filesToModify.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8')
    const updatedContent = content.replace(new RegExp(escapeRegExp(defaultUrl), 'g'), newUrl)
    fs.writeFileSync(filePath, updatedContent, 'utf8')
    console.log(`Replaced URL in ${filePath}`)
  })
}

function restoreUrlInFiles() {
  filesToModify.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8')
    const restoredContent = content.replace(new RegExp(escapeRegExp(newUrl), 'g'), defaultUrl)
    fs.writeFileSync(filePath, restoredContent, 'utf8')
    console.log(`Restored URL in ${filePath}`)
  })
}

if (process.argv.includes('--restore')) {
  restoreUrlInFiles()
} else {
  replaceUrlInFiles()
}
