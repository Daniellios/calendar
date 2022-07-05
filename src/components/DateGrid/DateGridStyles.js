import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  //   grid-template-columns: repeat(8, 60px);
  grid-template-rows: repeat(12, 60px);
  width: 100%;
  align-items: center;
`

export const GridRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  grid-column: 1/-1;

  & div:last-child {
    border-right: 1px solid transparent;
  }

  & div:first-child {
    border-left: 1px solid transparent;
  }
`

export const GridCell = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content-center;
  padding: 2px;
  border: .5px solid rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
`

export const GridTimeText = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 0.8rem;
  font-weight: 600;
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
