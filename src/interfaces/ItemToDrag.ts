interface IItemToDrag {
  id: string
  index: number
  indexList: number | null
  name: string
  initial: {
    index: number
    indexList: number | null
  }
  type: 'WITHOUT_ITEM' | 'ITEM_IN_TIER'
}

export default IItemToDrag
