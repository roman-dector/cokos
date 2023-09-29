import { Footer } from '@/components/footer'
import { ReactNode } from 'react'

export default function AppLayout(props: { children: ReactNode }) {
  return (
    <main
      className='flex flex-col justify-between'
      style={{ height: '100%' }}
    >
      {props.children}
      <Footer />
    </main>
  )
}
