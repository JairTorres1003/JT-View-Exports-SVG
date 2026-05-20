import type { SVGElementInfo } from '@jt-view-exports-svg/core'

import { ANIMATED_SVG_TAGS } from '@/constants/svg/tags'

import { findAnimateClassesStyles } from '../css/findAnimateClassesStyles'

/**
 * Checks for the pre-calculated 'isAnimated' flag in child attributes.
 * @returns `true` if the child attributes are already marked as animated.
 */
const hasAnimatedFlag = ({ childAttrs }: SVGElementInfo): boolean => {
  return childAttrs.isAnimated
}

/**
 * Checks if the element or any of its children have motion capabilities.
 * @returns `true` if the element or its children are marked as motion.
 */
const hasMotion = (elementInfo: SVGElementInfo): boolean => {
  return elementInfo.tag.isMotion || elementInfo.childAttrs.isMotion
}

/**
 * Checks if the element is a native SVG animation tag (e.g., `<animate>`).
 * @returns `true` if the tag is a dedicated animation tag.
 */
const isDedicatedAnimationTag = ({ tag }: SVGElementInfo): boolean => {
  return !!tag.name && tag.name in ANIMATED_SVG_TAGS
}

/**
 * Checks if the element has animation properties in its inline styles.
 * @returns `true` if inline styles contain animation properties.
 */
const hasInlineAnimationStyles = ({ props }: SVGElementInfo): boolean => {
  if (typeof props.style === 'object' && props.style !== null) {
    const style = props.style as Record<string, unknown>
    return 'animation' in style || 'animationName' in style
  }
  return false
}

/**
 * Extracts and analyzes the content of a `<style>` tag for keyframe animations.
 * @returns `true` if the style content includes keyframe animations.
 */
const hasKeyframeStylesInContent = ({ tag, props, childAttrs }: SVGElementInfo): boolean => {
  if (tag.name !== 'style') {
    return false
  }

  let cssContent = ''
  if (childAttrs.children && childAttrs.children.length > 0) {
    cssContent = childAttrs.children.filter((child) => typeof child === 'string').join('')
  } else if ('dangerouslySetInnerHTML' in props) {
    const html = props.dangerouslySetInnerHTML as { __html: string }
    if (typeof html?.__html === 'string') {
      cssContent = html.__html
    }
  }

  return cssContent ? findAnimateClassesStyles(cssContent).length > 0 : false
}

// Array of all check functions. This declarative approach makes it easy to extend in the future.
const animationChecks = [
  hasAnimatedFlag,
  hasMotion,
  isDedicatedAnimationTag,
  hasInlineAnimationStyles,
  hasKeyframeStylesInContent,
]

/**
 * Determines if an SVG element is animated by applying a set of rules.
 * The rules check for:
 * - A pre-calculated `isAnimated` flag on its children.
 * - Whether the tag is a native SVG animation tag (e.g., `<animate>`).
 * - The presence of inline `animation` or `animationName` styles.
 * - The presence of `@keyframes` within a `<style>` tag.
 *
 * @param elementInfo - An object containing all the information of the SVG element.
 * @returns `true` if the element meets any animation condition, otherwise `false`.
 */
export function isElementAnimated(elementInfo: SVGElementInfo): boolean {
  return animationChecks.some((check) => check(elementInfo))
}
