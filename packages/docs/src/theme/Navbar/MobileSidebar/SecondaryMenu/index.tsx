import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal'

export default function NavbarMobileSidebarSecondaryMenu(): React.ReactNode {
  return useNavbarSecondaryMenu().content
}
