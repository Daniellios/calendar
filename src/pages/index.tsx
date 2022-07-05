import { Head } from '@/components/Head/Head'
import React from 'react'
import { Layout } from '../layout/Layout'
import DateGrid from '@/components/DateGrid/DateGrid'
import DateScroller from '@/components/CalendarScroller/DateScroller'
export default function Home() {
  return (
    <Layout>
      <Head />
      <DateScroller></DateScroller>
      <DateGrid></DateGrid>
    </Layout>
  )
}
