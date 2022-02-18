import styled from 'styled-components'

interface IItemPropsStyles {
  isDragging: boolean
}

export const ItemToDragWrapper = styled.div<IItemPropsStyles>`
  position: relative;
  background: #0e0e0e;
  border-radius: 4px;
  transition: opacity 250ms ease, filter 250ms ease;

  opacity: ${({ isDragging }) => (isDragging ? '0.35' : '1')};
  filter: ${({ isDragging }) => (isDragging ? 'grayscale(100%)' : 'none')};
  cursor: ${({ isDragging }) => (isDragging ? 'grabbing' : 'grab')};
`

export const ItemToDragImage = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TooltipItem = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: #2e2e2e;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4px 8px;
  min-width: 50px;

  box-shadow: 0 0px 8px -2px rgba(0, 0, 0, 0.5);
  font-size: 1.4rem;
  color: #dedede;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-top: 10px solid #2e2e2e;
    position: absolute;
    bottom: -10px;
  }

  @keyframes animateTooltip {
    from {
      opacity: 0;
      transform: translate(-50%, 10px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  animation: animateTooltip 0.3s ease forwards;
`
