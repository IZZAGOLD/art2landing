import { ArtCardProps } from '@ui/ArtCard/ArtCard'
import { Icon3DCube } from '@ui/icons/Icon.3DCube'
import fish from '@assets/img/fish.png'
import bird from '@assets/img/bird.png'
import cat from '@assets/img/cat.png'
import octopus from '@assets/img/octopus.png'
import { IconGlobe } from '@ui/icons/Icon.Globe'
import { IconPlay } from '@ui/icons/Icon.Play'
import { IconMagicPan } from '@ui/icons/Icon.MagicPan'

export const ART_CARDS_DATA: Array<Omit<ArtCardProps, 'className'>> = [
  {
    title: 'internationalContest',
    description: 'internationalContestDescr',
    Icon: IconGlobe,
    date: 'tryNow',
    img: bird,
    coreColor: 'green',
  },
  {
    title: 'artBank',
    description: 'artBankDescr',
    Icon: Icon3DCube,
    date: '01.09.2024',
    img: fish,
    coreColor: 'pink',
  },

  {
    title: 'drawingLessons',
    description: 'drawingLessonsDescr',
    Icon: IconPlay,
    date: '01.01.2025',
    img: octopus,
    coreColor: 'purple',
  },
  {
    title: 'artGames',
    description: 'artGamesDescr',
    Icon: IconMagicPan,
    date: '01.06.2025',
    img: cat,
    coreColor: 'yellow',
  },
]
