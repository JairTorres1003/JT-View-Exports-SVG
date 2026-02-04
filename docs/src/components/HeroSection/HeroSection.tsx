import Link from '@docusaurus/Link'
import { Button } from '@heroui/button'
import type { ButtonVariantProps } from '@heroui/theme'
import { cn } from '@site/src/lib/utils'
import Image from '@theme/IdealImage'
import { ArrowRight, Download, ExternalLink } from 'lucide-react'
import type { FC } from 'react'

interface HeroSectionProps {
  title: string
  description?: string
  logo?: Parameters<typeof Image>[0]
  className?: string
  links?: {
    label: string
    href: string
    icon: 'arrow-right' | 'external-link' | 'download'
    iconPosition?: 'start' | 'end'
    variant?: ButtonVariantProps['variant']
    color?: ButtonVariantProps['color']
    iconClassName?: string
    /**
     * Defaults to '_self'
     */
    target?: '_blank' | '_self'
    className?: string
  }[]
}

const icons = {
  'arrow-right': ArrowRight,
  'external-link': ExternalLink,
  download: Download,
}

const HeroSection: FC<HeroSectionProps> = ({ title, description, logo, className, links }) => {
  return (
    <section className={cn('@container py-20', className)}>
      <div className='flex flex-col gap-6 items-center justify-center text-center'>
        <div className='flex flex-col items-center justify-center gap-6'>
          {logo && (
            <div className='w-32 h-32 text-primary @[480px]:w-54 @[480px]:h-54'>
              <Image {...logo} />
            </div>
          )}
          <div className='flex flex-col gap-2'>
            <h1 className='m-0 text-3xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]'>
              {title}
            </h1>
            {description && (
              <p className='text-md font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal max-w-2xl mx-auto'>
                {description}
              </p>
            )}
          </div>
        </div>
        <div className='flex-wrap gap-3 flex justify-center mt-4 w-full'>
          {links?.map((link) => {
            const Icon = icons[link.icon]
            return (
              <Button
                key={link.label}
                as={Link}
                to={link.href}
                target={link.target || '_self'}
                variant={link.variant}
                color={link.color}
                size='lg'
                className={cn('max-w-[200px] w-full', link.className)}
                {...{
                  [link.iconPosition === 'start' ? 'startContent' : 'endContent']: Icon ? (
                    <Icon size='1rem' className={cn('min-w-4', link.iconClassName)} />
                  ) : null,
                }}
              >
                <span className='truncate'>{link.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
