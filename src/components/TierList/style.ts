import styled from 'styled-components'
import Container from '../../styles/Layout/Container'

export const ContainerTierList = styled(Container)`
  margin-top: 32px;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  hr {
    margin: 24px auto;
    border-color: #2e2e2e;
    width: 98%;
  }
`

export const TierListWrapper = styled.ul`
  margin-top: 16px;
  border-radius: 4px;
  background-color: #2e2e2e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 0 solid #404040;
  border-width: 0 0 2px 2px;
`

export const WrapperItemsToDrag = styled.div`
  border: 1px solid #2e2e2e;
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px;
  border-radius: 4px;
`
