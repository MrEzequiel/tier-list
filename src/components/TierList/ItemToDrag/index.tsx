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
    item: { index, name, type, indexList },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  useEffect(() => {
    if (!isDragging) return

    setTooltipItem(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [isDragging])

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
