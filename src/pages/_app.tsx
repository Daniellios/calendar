import { store } from '../redux/store'
import { Provider } from 'react-redux'
import Theme from '@/styles/ThemeProvider'
import React, { Component } from 'react'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Provider>
  )
}
