import React from 'react'
import { useDrop } from 'react-dnd'
import IItemToDrag from '../../../interfaces/ItemToDrag'
import ItemToDrag from '../ItemToDrag'
import { ItemBoard, Tier, TierItemWrapper } from './style'
import type { Identifier } from 'dnd-core'
import IList from '../../../interfaces/List'
import useTierList from '../../../hooks/useTierList'
import { Types } from '../../../interfaces/TypesReducer'

interface IProps extends IList {
  index: number
}

const TierItem: React.FC<IProps> = ({ color, id, items, name, index }) => {
  const { dispatch } = useTierList()

  const [{ handlerId, didDrop }, drop] = useDrop<
    IItemToDrag,
    void,
    { handlerId: Identifier | null; didDrop: boolean }
  >({
    accept: ['ITEM_IN_TIER', 'WITHOUT_ITEM'],
    collect: monitor => ({
      handlerId: monitor.getHandlerId(),
      didDrop: monitor.isOver()
    }),

    drop: item => {
      if (item.type === 'WITHOUT_ITEM') {
        dispatch({
          type: Types.Move_Without_Tier,
          payload: { indexFrom: item.index, indexTo: index }
        })

        item.type = 'ITEM_IN_TIER'
        item.index = items.length
        item.indexList = index
        return
      }
    },

    hover(item: IItemToDrag) {
      if (item.type !== 'ITEM_IN_TIER' || item.indexList === null) return
      if (item.indexList === index) return

      dispatch({
        type: Types.Move_Item_In_Tier,
        payload: {
          indexFrom: item.index,
          indexFromList: item.indexList,
          indexTo: index
        }
      })

      item.indexList = index
      item.index = items.length
      return
    }
  })

  return (
    <TierItemWrapper key={id}>
      <Tier bg={color}>{name}</Tier>
      <ItemBoard canDrop={didDrop} ref={drop} data-handler-id={handlerId}>
        {items.map((item, indexItem: number) => (
          <ItemToDrag
            key={item.id}
            {...item}
            indexList={index}
            index={indexItem}
            type="ITEM_IN_TIER"
          />
        ))}
      </ItemBoard>
    </TierItemWrapper>
  )
}

export default TierItem
