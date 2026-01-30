import Link from '@docusaurus/Link'
import { Button } from '@heroui/button'
import { Tooltip, type TooltipPlacement } from '@heroui/tooltip'
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
    placement?: TooltipPlacement
  }
}

const SocialButton: FC<SocialButtonProps> = ({ config }) => {
  return (
    <Tooltip
      content={config.label}
      size='sm'
      showArrow
      isDisabled={config.disabledTooltip}
      placement={config.placement}
    >
      <Button
        isIconOnly
        size='sm'
        className='bg-transparent hover:bg-gray-700/10 dark:hover:bg-foreground/15'
        aria-label={config.label}
        as={Link}
        to={config.href}
        target='_blank'
      >
        {React.createElement(SOCIAL_ICONS[config.icon], { size: '1.25rem' })}
      </Button>
    </Tooltip>
  )
}

export default SocialButton
