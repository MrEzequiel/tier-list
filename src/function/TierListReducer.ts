import ITierList from '../interfaces/TierList'
import { TierListActions, Types } from '../interfaces/TypesReducer'
import produce from 'immer'
import ITierItem from '../interfaces/TierItem'

const TodoListReducer = (tierData: ITierList, action: TierListActions) => {
  switch (action.type) {
    // mover without item to tier
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

    // move item to tier
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

    // move to the no tiers
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

    case Types.Move_TierItem_To_InitialTier: {
      const { indexFrom, indexFromList, indexTo, indexToList } = action.payload

      return produce(tierData, draft => {
        let removed: ITierItem

        if (indexFromList === null) removed = draft.withoutTiers[indexFrom]
        else removed = draft.tiers[indexFromList].items[indexFrom]

        if (indexToList === null)
          draft.withoutTiers.filter(itemTier => !Object.is(removed, itemTier))
        else
          draft.tiers[indexToList].items.filter(
            itemTier => !Object.is(removed, itemTier)
          )

        if (indexToList !== null && indexFromList !== null) {
          draft.tiers[indexToList].items.splice(indexTo, 0, removed)
        } else {
          draft.withoutTiers.splice(indexTo, 0, removed)
        }
      })
    }

    case Types.Move_TierItem_To_OtherTier: {
      const { indexFrom, indexFromList, indexTo, indexToList } = action.payload

      return produce(tierData, draft => {
        let dragged: ITierItem

        if (indexFromList === null) {
          dragged = draft.withoutTiers[indexFrom]
        } else {
          dragged = draft.tiers[indexFromList].items[indexFrom]
        }

        if (indexToList !== null && indexFromList !== null) {
          draft.tiers[indexFromList].items.splice(indexFrom, 1)
          draft.tiers[indexToList].items.splice(indexTo, 0, dragged)
        } else {
          draft.withoutTiers.splice(indexFrom, 1)
          draft.withoutTiers.splice(indexTo, 0, dragged)
        }
      })
    }

    default: {
      return tierData
    }
  }
}

export default TodoListReducer
