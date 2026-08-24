import Link from '@docusaurus/Link'
import { Tooltip } from '@heroui/react'
import { buttonVariants } from '@heroui/styles'
import React, { type FC } from 'react'
import { GithubIcon, LinkedInIcon, VsCodeIcon } from '../assets/icons/social'

const SOCIAL_ICONS = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  vscode: VsCodeIcon,
}

interface SocialButtonProps {
  config: {
    icon: keyof typeof SOCIAL_ICONS
    href: string
    label: string
    disabledTooltip?: boolean
    placement?: 'top' | 'bottom' | 'left' | 'right'
  }
}

const SocialButton: FC<SocialButtonProps> = ({ config }) => {
  return (
    <Tooltip delay={0} isDisabled={config.disabledTooltip}>
      <Tooltip.Trigger aria-label={config.label}>
        <Link
          to={config.href}
          target='_blank'
          aria-label={config.label}
          className={buttonVariants({
            size: 'sm',
            isIconOnly: true,
            variant: 'ghost',
            className: 'w-8 h-8',
          })}
        >
          {React.createElement(SOCIAL_ICONS[config.icon], {
            size: '1.25rem',
            className: 'w-5 h-5 m-0',
          })}
        </Link>
      </Tooltip.Trigger>

      <Tooltip.Content showArrow placement={config.placement}>
        <Tooltip.Arrow />
        {config.label}
      </Tooltip.Content>
    </Tooltip>
  )
}

export default SocialButton
