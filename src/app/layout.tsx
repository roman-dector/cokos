'use client'

import style from './styles/style.module.css'
import './styles/global.css'
import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { authModel } from '@/store/features'
import { useAppDispatch } from '@/store/utils'

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <link rel='manifest' href='/manifest.json'></link>
      <link rel='apple-touch-icon' href='/icon.png'></link>
      <body className={style.rootLayout}>
        <Provider store={store}>{props.children}</Provider>
      </body>
    </html>
  )
}
