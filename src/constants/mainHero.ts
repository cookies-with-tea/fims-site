import dialogTelegramIcon from '@/assets/icons/dialogTelegramIcon.svg'
import dialogGithubIcon from '@/assets/icons/dialogGithubIcon.svg'
import dialogGoogleIcon from '@/assets/icons/dialogGoogleIcon.svg'

import { heroSocialNetworkType } from '@/types/social-network.type'

export const heroSocialNetworks: heroSocialNetworkType[] = [
  {
    id: 0,
    alt: 'Instagram',
    icon: 'instagram',
  },
  {
    id: 1,
    alt: '3',
    icon: 'in',
  },
  {
    id: 2,
    alt: '2',
    icon: 'telegram',
  },
]

export const dialogSocialNetworks: heroSocialNetworkType[] = [
  {
    id: 0,
    alt: 'Telegram',
    icon: dialogTelegramIcon,
  },
  {
    id: 1,
    alt: 'Github',
    icon: dialogGithubIcon,
  },
  {
    id: 2,
    alt: 'Google',
    icon: dialogGoogleIcon,
  },
]
