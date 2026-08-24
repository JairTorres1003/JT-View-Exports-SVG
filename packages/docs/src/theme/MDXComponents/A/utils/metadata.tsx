import { ArrowUpRight, ExternalLink } from 'lucide-react'

/**
 * Parses a metadata string and extracts key-value pairs into an object.
 *
 * @param metaString - A string containing metadata in the format `[key1=value1;key2=value2;...]`
 *                     Surrounding brackets are optional and will be removed.
 * @returns An object where keys are metadata property names and values are parsed as strings or booleans.
 *          The strings 'true' and 'false' are converted to boolean values.
 *
 * @example
 * ```tsx
 * getMetaProps('[disabled=true;label=Submit;hidden=false]')
 * // Returns: { disabled: true, label: 'Submit', hidden: false }
 * ```
 */
function getMetaProps(metaString: string) {
  const metaProps: Record<string, string | boolean> = {}
  const cleanedMetaString = metaString.replace(/^\[|\]$/g, '') // Remove surrounding brackets
  const pairs = cleanedMetaString.split(';')

  pairs.forEach((pair) => {
    const [key, value] = pair.split('=')
    if (key && value !== undefined) {
      metaProps[key] = value === 'true' ? true : value === 'false' ? false : value
    }
  })

  return metaProps
}

const icons = {
  default: ArrowUpRight,
  'external-link': ExternalLink,
}

interface MetaLinkData {
  href: string
  icon?: (typeof icons)[keyof typeof icons]
  [key: string]: unknown
}

/**
 * Determines if a given URL is external relative to the current origin.
 *
 * @param url - The URL string to check.
 * @returns `true` if the URL is external, `false` otherwise.
 */
const isExternalLink = (url: string) => {
  try {
    const parsedUrl = new URL(url, window.location.origin)
    return parsedUrl.origin !== window.location.origin
  } catch {
    return false
  }
}

/**
 * Extracts and processes metadata from URL query parameters.
 *
 * @param href - The URL string to parse for metadata properties
 * @returns An object containing the cleaned href and optional meta data
 */
export function getMetaLink(href: string): MetaLinkData {
  if (!href?.includes('meta-props=')) {
    return { href }
  }

  try {
    if (typeof window === 'undefined') {
      return { href }
    }

    const isExternal = isExternalLink(href)
    const url = new URL(href, window.location.origin)
    const meta = url.searchParams.get('meta-props')

    if (!meta) {
      return { href: url.toString() }
    }

    url.searchParams.delete('meta-props')

    const props = getMetaProps(meta)

    return {
      target: isExternal ? '_blank' : undefined,
      ...props,
      href: isExternal ? url.toString() : url.pathname + url.search + url.hash,
      icon: props.icon ? (icons[props.icon as keyof typeof icons] ?? icons.default) : undefined,
    }
  } catch (_) {
    return { href }
  }
}
