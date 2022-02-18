import React from 'react'
import ItemToDrag from './ItemToDrag'
import TierItem from './TierItem'

import { ContainerTierList, TierListWrapper, WrapperItemsToDrag } from './style'
import useTierList from '../../hooks/useTierList'

const TierList: React.FC = () => {
  const { tierListData } = useTierList()

  return (
    <ContainerTierList>
      <h1>{tierListData.title}</h1>

      <TierListWrapper>
        {tierListData.tiers.map((tier, index) => (
          <TierItem key={tier.id} {...tier} index={index} />
        ))}
      </TierListWrapper>

      <hr />

      <WrapperItemsToDrag>
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
