import IList from './List'
import ITierItem from './TierItem'

interface ITierList {
  title: string
  id: string

  tiers: IList[]
  withoutTiers: ITierItem[]
}

export default ITierList
