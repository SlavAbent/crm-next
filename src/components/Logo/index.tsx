import Link from 'next/link'
import { icons } from '@/icons/'
const { DashboardIcon } = icons

export const Logo = () => {
  return (
    <div className="mb-[32px]">
      <Link href="/" className="flex items-center">
        <DashboardIcon />
        <span>Logo</span>
      </Link>
    </div>
  )
}
