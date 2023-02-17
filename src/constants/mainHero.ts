import instagramIcon from "@/assets/icons/instagramIcon.svg"
import inIcon from "@/assets/icons/in.svg"
import telegremIcon from "@/assets/icons/telegram.svg"
import dialogTelegramIcon from "@/assets/icons/dialogTelegramIcon.svg"
import dialogGithubIcon from "@/assets/icons/dialogGithubIcon.svg"
import dialogGoogleIcon from "@/assets/icons/dialogGoogleIcon.svg"

import type { heroSocialNetworkType } from "@/src/types/social-network.type"

export  const heroSocialNetworks: heroSocialNetworkType[] = [
    {   
      id: 0,
      alt: "Instagram",
      url: instagramIcon,
    },
    {
      id: 1,
      alt: "3",
      url: inIcon,
    },
    {
      id: 2,
      alt: "2",
      url: telegremIcon,
    },
  ]

  export  const dialogSocialNetworks: heroSocialNetworkType[] = [
    {   
      id: 0,
      alt: "Telegram",
      url: dialogTelegramIcon,
    },
    {
      id: 1,
      alt: "Github",
      url: dialogGithubIcon,
    },
    {
      id: 2,
      alt: "Google",
      url: dialogGoogleIcon,
    },
  ]
