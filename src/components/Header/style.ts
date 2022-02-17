import styled from 'styled-components'
import Container from '../../styles/Layout/Container'

export const HeaderWrapper = styled.header`
  background: #0e0e0e;
`

export const HeaderContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
  }
`
