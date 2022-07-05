import styled from 'styled-components'

export const GridCell = styled.div`
  height: 100%;
  width: 100%;
  padding: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
`

export const GridCellBG = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 2px;
  display: flex;
  align-items: flex-end;

  background: ${(props) =>
    props.isSelected ? 'rgba(89, 102, 228, 0.4)' : ' transparent'};
`
