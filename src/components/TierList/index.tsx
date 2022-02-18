import React from 'react'
import ItemToDrag from './ItemToDrag'
import TierItem from './TierItem'
import useTierList from '../../hooks/useTierList'
import { useDrop } from 'react-dnd'
import type { Identifier } from 'dnd-core'
import IItemToDrag from '../../interfaces/ItemToDrag'

import { ContainerTierList, TierListWrapper, WrapperItemsToDrag } from './style'
import { Types } from '../../interfaces/TypesReducer'

const TierList: React.FC = () => {
  const { tierListData, dispatch } = useTierList()

  const [{ handlerId, didDrop }, drop] = useDrop<
    IItemToDrag,
    void,
    { handlerId: Identifier | null; didDrop: boolean }
  >({
    accept: 'ITEM_IN_TIER',
    collect: monitor => ({
      handlerId: monitor.getHandlerId(),
      didDrop: monitor.isOver()
    }),

    drop: item => {
      if (!item.indexList) return

      dispatch({
        type: Types.Move_To_Without_Tier,
        payload: {
          indexFrom: item.index,
          indexFromList: item.indexList
        }
      })

      item.indexList = null
      item.type = 'WITHOUT_ITEM'
      item.index = tierListData.withoutTiers.length
    }
  })

  return (
    <ContainerTierList>
      <h1>{tierListData.title}</h1>

      <TierListWrapper>
        {tierListData.tiers.map((tier, index) => (
          <TierItem key={tier.id} {...tier} index={index} />
        ))}
      </TierListWrapper>

      <hr />

      <WrapperItemsToDrag
        didDrop={didDrop}
        ref={drop}
        data-handler-id={handlerId}
      >
        {tierListData.withoutTiers.map((item, index: number) => (
          <ItemToDrag
            key={item.id}
            {...item}
            indexList={null}
            index={index}
            type="WITHOUT_ITEM"
          />
        ))}
      </WrapperItemsToDrag>
    </ContainerTierList>
  )
}

export default TierList
