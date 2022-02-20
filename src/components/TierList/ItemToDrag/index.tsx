import React, { useEffect, useRef, useState } from 'react'
import { useDrag, useDrop, XYCoord } from 'react-dnd'
import IItemToDrag from '../../../interfaces/ItemToDrag'
import ITierItem from '../../../interfaces/TierItem'
import type { Identifier } from 'dnd-core'
import { Types } from '../../../interfaces/TypesReducer'
import useTierList from '../../../hooks/useTierList'
import { CSSTransition } from 'react-transition-group'

import { ItemToDragImage, ItemToDragWrapper, TooltipItem } from './style'

interface IProps extends ITierItem {
  index: number
  indexList: number | null
  type: 'ITEM_IN_TIER' | 'WITHOUT_ITEM'
}

const ItemToDrag: React.FC<IProps> = ({
  id,
  image,
  name,
  index,
  indexList,
  type
}) => {
  const initialIndex = index
  const initialIndexList = indexList

  const dropRef = useRef<HTMLDivElement | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<NodeJS.Timer>()
  const [tooltipItem, setTooltipItem] = useState(false)
  const { dispatch } = useTierList()

  const handleMouseEnter = () => {
    intervalRef.current = setTimeout(() => {
      setTooltipItem(true)
    }, 350)
  }

  const handleMouseLeave = () => {
    if (!intervalRef.current) return

    clearInterval(intervalRef.current)
    setTooltipItem(false)
  }

  const [{ monitorDrag, isDragging }, drag] = useDrag({
    type: type,
    item: () => ({
      index,
      name,
      type,
      indexList,
      id,
      initial: {
        index: initialIndex,
        indexList: initialIndexList
      }
    }),
    collect: monitor => ({
      monitorDrag: monitor.getItem(),
      isDragging: monitor.isDragging()
    }),
    isDragging: monitor => monitor.getItem<{ id: string }>()?.id === id,

    end: (item, monitor) => {
      const didDrop = monitor.didDrop()
      if (!didDrop) {
        // move to initial position
        dispatch({
          type: Types.Move_TierItem_To_OtherTier,
          payload: {
            indexFrom: item.index,
            indexFromList: item.indexList,
            indexTo: item.initial.index,
            indexToList: item.initial.indexList
          }
        })
      }
    }
  })

  const [{ handlerId }, drop] = useDrop<
    IItemToDrag,
    void,
    { handlerId: Identifier | null }
  >({
    accept: type,
    collect: monitor => ({
      handlerId: monitor.getHandlerId()
    }),
    hover(item, monitor) {
      if (!dropRef.current) return

      const dragIndex = item.index
      const dragIndexList = item.indexList
      const hoverIndex = index
      const hoverIndexList = indexList

      if (dragIndexList === hoverIndexList && dragIndex === hoverIndex) return

      const { x: itemDragX } = monitor.getClientOffset() as XYCoord
      const itemHover = {
        x: dropRef.current.offsetLeft,
        y: dropRef.current.offsetTop
      }
      const middleItemHover = dropRef.current.offsetWidth / 2 + itemHover.x

      if (itemDragX < middleItemHover && dragIndex < hoverIndex) return
      if (itemDragX > middleItemHover && dragIndex > hoverIndex) return

      dispatch({
        type: Types.Move_TierItem_To_OtherTier,
        payload: {
          indexFrom: dragIndex,
          indexFromList: dragIndexList,
          indexTo: hoverIndex,
          indexToList: hoverIndexList
        }
      })

      item.index = hoverIndex
      item.indexList = hoverIndexList
    }
  })

  useEffect(() => {
    if (!isDragging) return

    setTooltipItem(false)
    if (intervalRef.current) clearInterval(intervalRef.current)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isDragging])

  // clear interval when unmount
  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    },
    []
  )

  drop(dropRef)
  return (
    <ItemToDragWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isDragging={isDragging}
      ref={dropRef}
      data-handler-id={handlerId}
    >
      <ItemToDragImage ref={drag}>
        <img src={image} alt={name} />
      </ItemToDragImage>

      <CSSTransition
        in={tooltipItem && !isDragging && !monitorDrag}
        classNames="tooltip"
        unmountOnExit
        nodeRef={tooltipRef}
        timeout={350}
      >
        <TooltipItem ref={tooltipRef}>{name}</TooltipItem>
      </CSSTransition>
    </ItemToDragWrapper>
  )
}

export default ItemToDrag
