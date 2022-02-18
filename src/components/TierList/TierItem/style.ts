import styled from 'styled-components'
import colorContrast from '../../../utils/colorContrast'

export const TierItemWrapper = styled.li`
  display: grid;
  grid-template-columns: 70px 1fr 60px;
  height: 70px;

  border: 0 solid #404040;
  border-width: 2px 2px 0 0;

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    span {
      border-top-left-radius: 4px;
    }
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    span {
      border-bottom-left-radius: 4px;
    }
  }
`

export const Tier = styled.span<{ bg: string }>`
  cursor: text;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  background: ${props => props.bg};
  color: ${({ bg }) => (colorContrast(bg) ? '#0E0E0E' : '#F7F7F7')};
  border-right: 2px solid #404040;
  font-size: 1.4rem;
  padding: 8px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ItemBoard = styled.ul<{ canDrop: boolean }>`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  padding: 4px 8px;

  transition: background-color 150ms ease;
  background-color: ${props => (props.canDrop ? '#1A1A1A' : 'transparent')};
`
