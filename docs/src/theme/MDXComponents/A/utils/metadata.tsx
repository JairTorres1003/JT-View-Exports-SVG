import type { LucideIcon } from 'lucide-react'
import { type LazyExoticComponent, lazy } from 'react'

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

/**
 * Converts a camelCase or PascalCase icon name to kebab-case format.
 *
 * @param iconName - The icon name in camelCase or PascalCase format
 * @returns The icon name converted to kebab-case (lowercase with hyphens)
 *
 * @example
 * ```tsx
 * iconNameToKebabCase('ArrowRightCircle') // Returns: 'arrow-right-circle'
 * ```
 */
function iconNameToKebabCase(iconName: string) {
  return iconName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

const iconComponentCache = new Map<string, LazyExoticComponent<LucideIcon>>()

/**
 * Retrieves a lazy-loaded Lucide React icon component by its key name.
 *
 * Caches the lazy component after first load to avoid redundant dynamic imports.
 *
 * @param iconKey - The name of the icon to load (e.g., 'Heart', 'Star')
 * @returns A lazy React component for the specified Lucide icon
 */
function getLazyIconComponent(iconKey: string) {
  if (!iconComponentCache.has(iconKey)) {
    const iconComponent = lazy(async () => {
      const mod = await import(`lucide-react/dist/esm/icons/${iconKey}.js`)
      return {
        default: (mod.default ||
          (mod as unknown as { [k: string]: LucideIcon })[iconKey]) as LucideIcon,
      }
    })
    iconComponentCache.set(iconKey, iconComponent)
  }

  return iconComponentCache.get(iconKey)
}

/**
 * Extracts and processes metadata from URL query parameters.
 *
 * @param href - The URL string to parse for metadata properties
 * @returns An object containing the cleaned href and optional metaLink data
 */
export function getMetaLink(href: string) {
  if (!href?.includes('meta-props=')) {
    return { href, metaLink: null }
  }

  try {
    if (typeof window === 'undefined') {
      return { href, metaLink: null }
    }

    const url = new URL(href, href.startsWith('/') ? window.location.origin : undefined)
    const metaLink = url.searchParams.get('meta-props')

    if (!metaLink) {
      return { href: url.toString(), metaLink: null }
    }

    url.searchParams.delete('meta-props')

    const props = getMetaProps(metaLink)

    const iconKey =
      props.anchorIcon && typeof props.anchorIcon === 'string'
        ? iconNameToKebabCase(props.anchorIcon as string)
        : null

    return {
      href: url.toString(),
      metaLink: {
        ...props,
        anchorIcon: iconKey ? getLazyIconComponent(iconKey) : undefined,
      },
    }
  } catch (_) {
    return { href, metaLink: null }
  }
}
