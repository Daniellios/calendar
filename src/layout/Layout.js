import React from 'react'
import { Container } from './LayoutStyles'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Container>
  )
}
