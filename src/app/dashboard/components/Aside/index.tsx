'use client'

import { Logo } from '@/components/Logo'
import React from 'react'
import { Folders } from '@/app/dashboard/components/Folders'
import { linkData } from '@/shared/internalData'
import { RouteItem } from './RouteItem'

export async function Aside() {
  return (
    <div className="flex flex-col w-[300px] border-r-[1px] border-r-gray-500 h-[100%] p-[16px]">
      <Logo />
      {linkData.map(({ id, href, text, icon }) => (
        <RouteItem key={id} id={id} href={href} text={text} icon={icon} />
      ))}
      <Folders />
    </div>
  )
}
