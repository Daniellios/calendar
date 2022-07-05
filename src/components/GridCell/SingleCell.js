import React, { useState, useEffect, useRef } from 'react'

import { GridCell, GridCellBG, GridTimeText } from './SingleCellStyles'

const SingleCell = () => {
  const [isSelected, setIsSelected] = useState(false)

  const chooseDate = () => {
    setIsSelected(!isSelected)
  }

  return (
    <GridCell onClick={chooseDate}>
      <GridCellBG isSelected={isSelected}></GridCellBG>
    </GridCell>
  )
}

export default SingleCell
