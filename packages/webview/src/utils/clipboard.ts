/**
 * Copies the provided text to the clipboard.
 *
 * @param text - The text to be copied to the clipboard.
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text)
}
