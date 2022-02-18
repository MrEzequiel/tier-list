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
  Move_Without_Tier = 'MOVE_WITHOUT_TIER',
  Move_Item_In_Tier = 'MOVE_ITEM_IN_TIER',
  Move_To_Without_Tier = 'MOVE_TO_WITHOUT_TIER'
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
}

export type TierListActions =
  ActionMap<TierListPayload>[keyof ActionMap<TierListPayload>]
