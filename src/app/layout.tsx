'use client'

import style from './styles/style.module.css'
import './styles/global.css'
import Provider from './providers'
import { ReactNode } from 'react'

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <link rel='manifest' href='/manifest.json'></link>
      <link rel='apple-touch-icon' href='/icon.png'></link>
      <body className={style.rootLayout}>
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
