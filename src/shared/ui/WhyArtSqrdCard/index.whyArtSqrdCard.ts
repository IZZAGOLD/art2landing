import { WhyArtSqrdCardProps } from '@ui/WhyArtSqrdCard/WhyArtSqrdCard'
import { IconUp } from '@ui/icons/Icon.Up'
import { IconGlobe } from '@ui/icons/Icon.Globe'
import { IconCheck } from '@ui/icons/Icon.Check'

export const WHY_ART_SQRD_CARDS_DATA: Array<
  Omit<WhyArtSqrdCardProps, 'className'>
> = [
  {
    description: 'motivationInForm',
    Icon: IconUp,
    coreColor: 'yellow',
  },
  {
    description: 'opportunityGet',
    Icon: IconGlobe,
    coreColor: 'purple',
  },
  {
    description: 'abilityToSell',
    Icon: IconCheck,
    coreColor: 'pink',
  },
]
