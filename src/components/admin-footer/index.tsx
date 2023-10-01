'use client'

import { BarChart2, HeartPulse, MoveLeft } from 'lucide-react'
import style from './style.module.css'
import { useRouter, usePathname } from 'next/navigation'

export function AdminFooter() {
  const router = useRouter()
  const url = usePathname()

  return (
    <footer className={style.footer}>
      <div
        className={style.item}
        style={{
          color: 'var(--main-gray)',
        }}
        onClick={() => {
          router.push('/profile')
        }}
      >
        <MoveLeft />
        <span>В профиль</span>
      </div>

      <div
        className={style.item}
        style={{
          color: url === '/admin/funds' ? 'red' : 'var(--main-gray)',
        }}
        onClick={() => {
          router.push('/admin/funds')
        }}
      >
        <HeartPulse />
        <span>Фонды</span>
      </div>
      <div
        className={style.item}
        style={{
          color: url === '/admin/stat' ? 'red' : 'var(--main-gray)',
        }}
        onClick={() => {
          router.push('/admin/stat')
        }}
      >
        <BarChart2 />
        <span>Статистика</span>
      </div>
    </footer>
  )
}
