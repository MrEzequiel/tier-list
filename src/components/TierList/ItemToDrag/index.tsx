import React, { useEffect, useRef, useState } from 'react'
import { useDrag } from 'react-dnd'
import ITierItem from '../../../interfaces/TierItem'
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
  const intervalRef = useRef<NodeJS.Timer>()
  const [tooltipItem, setTooltipItem] = useState(false)

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

  const [{ isDragging }, drag] = useDrag({
    type: type,
    item: () => ({ index, name, type, indexList, id }),
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    isDragging: monitor => monitor.getItem<{ id: string }>()?.id === id
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

  return (
    <ItemToDragWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isDragging={isDragging}
    >
      <ItemToDragImage ref={drag}>
        <img src={image} alt={name} />
      </ItemToDragImage>

      {tooltipItem && !isDragging && <TooltipItem>{name}</TooltipItem>}
    </ItemToDragWrapper>
  )
}

export default ItemToDrag
