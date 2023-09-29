'use client'

import {
  BadgeRussianRuble,
  MenuSquare,
  Star,
  User,
} from 'lucide-react'
import style from './style.module.css'
import { useRouter } from 'next/navigation'

export function Footer() {
  const router = useRouter()
  return (
    <footer className={style.footer}>
      <MenuSquare
        onClick={() => {
          router.push('/main')
        }}
      />
      <BadgeRussianRuble
        onClick={() => {
          router.push('/score')
        }}
      />
      <Star
        onClick={() => {
          router.push('/rating')
        }}
      />
      <User
        onClick={() => {
          router.push('/profile')
        }}
      />
    </footer>
  )
}
