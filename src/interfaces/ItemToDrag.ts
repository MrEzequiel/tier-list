interface IItemToDrag {
  id: string
  index: number
  indexList: number | null
  name: string
  type: 'WITHOUT_ITEM' | 'ITEM_IN_TIER'
}

export default IItemToDrag
