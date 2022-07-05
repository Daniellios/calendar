import {
  daysOfWeek,
  getMonthOptions,
  getNumberOfDaysInMonth,
  createDaysForCurrentMonth,
  currentMONTH,
  currentYEAR,
  getCurrentWeek,
  currentDAY,
} from '@/helpers/helpers'
import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import {
  Container,
  ScrollGrid,
  WeekDayName,
  MonthDayNumber,
  Month,
  LeftScroll,
  RightScroll,
} from './DateScrollerStyles'

const DateScroller = () => {
  // console.log(createDaysForCurrentMonth(currentYEAR, currentMONTH))
  // console.log(getMonthOptions())
  // console.log(currentMONTH)
  // console.log(currentYEAR)

  console.log(getCurrentWeek())

  const [month, setMonth] = useState(currentMONTH)
  const [year, setYear] = useState(currentYEAR)

  const changeMonthForward = () => {
    if (month === 12) {
      setMonth(1)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
  }

  const changeMonthBackward = () => {
    if (month === 1) {
      setMonth(12)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
  }

  return (
    <Container>
      <ScrollGrid>
        {daysOfWeek.map((day, index) => (
          <WeekDayName key={index} gridArea={`${day.substring(0, 2)}`}>
            {day.at(0)}
          </WeekDayName>
        ))}
        <MonthDayNumber gridArea={'d1'} active>
          29
        </MonthDayNumber>
        <LeftScroll onClick={changeMonthBackward}>
          <AiOutlineLeft size={'1rem'} />
        </LeftScroll>
        {getMonthOptions().map(({ label, value }) => {
          if (value === month) {
            return (
              <Month key={value}>
                {label} {year}
              </Month>
            )
          }
        })}
        <RightScroll onClick={changeMonthForward}>
          <AiOutlineRight size={'1rem'} />
        </RightScroll>
      </ScrollGrid>
    </Container>
  )
}

export default DateScroller
