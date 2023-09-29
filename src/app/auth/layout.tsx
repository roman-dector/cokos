import style from './style.module.css'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={style.authPage}>{children}</div>
}
