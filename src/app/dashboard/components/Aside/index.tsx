'use client'

import React from 'react'
import { HeaderAside } from './HeaderAside'
import clsx from 'clsx'
import { SettingsIcon } from '@/icons/SettingsIcon'
import Folders from './FolderContent'
import { AsideRoutes } from '@/app/dashboard/components/Aside/AsideRoutes'

export function Aside() {
  return (
    <div
      className={clsx(
        'flex flex-col border-r-[1px] border-r-gray-500 w-[250px] h-[100%] p-[18px] transition-all duration-300 ease-in-out',
      )}
    >
      <HeaderAside className="mb-[48px] w-full" />
      <AsideRoutes className="mb-[32px]" />
      <div>
        <div>Projects</div>
        <Folders />
      </div>
      <div className="flex grow items-end cursor-pointer">
        <SettingsIcon className="mr-[8px]" />
        <span>Settings</span>
      </div>
    </div>
  )
}
