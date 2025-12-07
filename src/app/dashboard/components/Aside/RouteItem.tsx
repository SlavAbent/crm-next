'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface RouteItemProps {
  id: number
  href: string
  text: string
  icon: ReactNode
}

export const RouteItem = ({ href, text, icon }: RouteItemProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={clsx(
        'mb-2 flex items-center rounded-lg p-2 transition-colors',
        pathname === href && 'bg-gray-100 dark:bg-gray-800',
      )}
    >
      <span className="mr-2 text-black dark:text-white">{icon}</span>
      <span className="text-black dark:text-white">{text}</span>
    </Link>
  )
}
