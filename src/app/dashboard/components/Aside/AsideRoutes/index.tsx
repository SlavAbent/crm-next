import { linkData } from '@/shared/internalData'
import { RouteItem } from '@/app/dashboard/components/Aside/RouteItem'
import React from 'react'
import { clsx } from 'clsx'

export const AsideRoutes = ({ className }: {
  className: string;
}) => {
  return (
    <div className={clsx("", className)}>
      {linkData.map(({ id, href, text, icon }) => (
        <RouteItem
          key={`${id}${href}`}
          id={id}
          href={href}
          text={text}
          icon={icon}
        />
      ))}
    </div>
  )
}