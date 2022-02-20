type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key

        payload: M[Key]
      }
}

export enum Types {
  Move_Without_Tier = 'MOVE_WITHOUT_TIER', // eslint-disable-line
  Move_Item_In_Tier = 'MOVE_ITEM_IN_TIER', // eslint-disable-line
  Move_To_Without_Tier = 'MOVE_TO_WITHOUT_TIER', // eslint-disable-line
  Move_TierItem_To_OtherTier = 'MOVE_TIER_ITEM_TO_OTHER_TIER', // eslint-disable-line
  Move_TierItem_To_InitialTier = 'MOVE_TIER_ITEM_TO_INITIAL_TIER' // eslint-disable-line
}

type TierListPayload = {
  [Types.Move_Without_Tier]: {
    indexFrom: number
    indexTo: number
  }
  [Types.Move_Item_In_Tier]: {
    indexFrom: number
    indexFromList: number
    indexTo: number
  }
  [Types.Move_To_Without_Tier]: {
    indexFrom: number
    indexFromList: number
  }
  [Types.Move_TierItem_To_OtherTier]: {
    indexFrom: number
    indexFromList: number | null
    indexTo: number
    indexToList: number | null
  }
  [Types.Move_TierItem_To_InitialTier]: {
    indexFrom: number
    indexFromList: number | null
    indexTo: number
    indexToList: number | null
  }
}

export type TierListActions =
  ActionMap<TierListPayload>[keyof ActionMap<TierListPayload>]
