import React from 'react'
import { Wrapper, HeaderTitle, AddBtn } from './HeaderStyles'
import { AiOutlinePlus } from 'react-icons/ai'

const Header = () => {
  const handleAddBtn = () => {
    console.log('ADD NEW DATE')
  }

  return (
    <Wrapper>
      <HeaderTitle>Interview Calendar</HeaderTitle>
      <AddBtn onClick={handleAddBtn}>
        <AiOutlinePlus />
      </AddBtn>
    </Wrapper>
  )
}

export default Header
