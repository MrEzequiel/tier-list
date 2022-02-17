import styled from 'styled-components'

interface ContainerProps {
  size?: 'small' | 'large' | 'medium' | 'full'
}

const Sizes = {
  small: '480px',
  medium: '768px',
  large: '960px',
  full: '100%'
}

const Container = styled.div<ContainerProps>`
  max-width: ${({ size }) => (size ? Sizes[size] : Sizes.large)};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`

export default Container
