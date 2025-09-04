import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface RouteItemProps {
  id: string
  href: string
  text: string
  icon: React.ReactNode
}

export const RouteItem = ({ id, href, text, icon }: RouteItemProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={clsx(
        'flex items-center p-2 mb-2 rounded-lg transition-colors',
        pathname === href && 'bg-gray-100',
      )}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </Link>
  )
}
