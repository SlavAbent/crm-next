'use client'

import React, { useState } from 'react'
import { linkData } from '@/shared/internalData'
import { RouteItem } from './RouteItem'
import { HeaderAside } from './HeaderAside'
import clsx from 'clsx'
import Folders from './List/Folders'
import { SettingsIcon } from '@/icons/SettingsIcon'

export function Aside() {
  return (
    <div
      className={clsx(
        'flex flex-col border-r-[1px] border-r-gray-500 w-[250px] h-[100%] p-[18px] transition-all duration-300 ease-in-out',
      )}
    >
      <div className="mb-[48px] w-full">
        <HeaderAside />
      </div>
      <div className="mb-[48px]">
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
      <Folders />
      <div className="flex grow items-end cursor-pointer">
        <SettingsIcon className="mr-[8px]" />
        <span>Settings</span>
      </div>
    </div>
  )
}
