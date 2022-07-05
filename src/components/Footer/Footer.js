import React from 'react'
import { useState } from 'react'

import { Wrapper, DayTitle, DeleteBtn } from './FooterStyles'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleDelete = () => {
    console.log('DELETE')
  }

  return (
    <Wrapper>
      <DayTitle>Today</DayTitle>
      <DeleteBtn isVisible={isVisible} onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </Wrapper>
  )
}

export default Footer
