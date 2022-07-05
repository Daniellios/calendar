import React, { useState } from 'react'

import {
  Wrapper,
  GridRow,
  GridCell,
  GridCellBG,
  GridTimeText,
} from './DateGridStyles'

import { daysOfWeek, timeOfDay } from '@/helpers/helpers'
import SingleCell from '../GridCell/SingleCell'

const DateGrid = () => {
  return (
    <Wrapper>
      {timeOfDay.map((time, columnIndex) => (
        <GridRow key={`r${columnIndex}`}>
          <GridCell>
            <GridTimeText>{time}</GridTimeText>
          </GridCell>
          {daysOfWeek.map((item, rowIndex) => (
            <SingleCell
              key={String(rowIndex) + String(columnIndex)}
              cellID={String(rowIndex) + String(columnIndex)}
            ></SingleCell>
          ))}
        </GridRow>
      ))}
    </Wrapper>
  )
}

export default DateGrid
