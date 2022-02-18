import ITierList from '../interfaces/TierList'
import { TierListActions, Types } from '../interfaces/TypesReducer'
import produce from 'immer'

const TodoListReducer = (tierData: ITierList, action: TierListActions) => {
  switch (action.type) {
    case Types.Move_Without_Tier: {
      const { indexFrom, indexTo } = action.payload

      return produce(tierData, draft => {
        const removed = draft.withoutTiers[indexFrom]
        draft.withoutTiers = draft.withoutTiers.filter(
          itemTier => !Object.is(removed, itemTier)
        )
        draft.tiers[indexTo].items.push(removed)
      })
    }

    case Types.Move_Item_In_Tier: {
      const { indexFrom, indexFromList, indexTo } = action.payload

      return produce(tierData, draft => {
        const removed = draft.tiers[indexFromList].items[indexFrom]
        draft.tiers[indexFromList].items = draft.tiers[
          indexFromList
        ].items.filter(itemTier => !Object.is(removed, itemTier))
        draft.tiers[indexTo].items.push(removed)
      })
    }

    case Types.Move_To_Without_Tier: {
      const { indexFrom, indexFromList } = action.payload

      return produce(tierData, draft => {
        const removed = draft.tiers[indexFromList].items[indexFrom]
        draft.tiers[indexFromList].items = draft.tiers[
          indexFromList
        ].items.filter(itemTier => !Object.is(removed, itemTier))
        draft.withoutTiers.push(removed)
      })
    }

    default: {
      return tierData
    }
  }
}

export default TodoListReducer
