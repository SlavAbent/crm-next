import { HeaderAside } from './HeaderAside'
import clsx from 'clsx'
import { SettingsIcon } from '@/icons/SettingsIcon'
import Folders from './FolderContent'
import { AsideRoutes } from './AsideRoutes'
import { Suspense } from 'react'

export function Aside() {
  return (
    <div
      className={clsx(
        'flex h-[100%] w-[250px] flex-col border-r-[1px] border-r-gray-500 p-[18px] transition-all duration-300 ease-in-out',
      )}
    >
      <HeaderAside className="mb-[48px] w-full" />
      <AsideRoutes className="mb-[32px]" />

      <div>
        <div>Projects</div>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Folders />
        </Suspense>
      </div>

      <div className="flex grow cursor-pointer items-end">
        <SettingsIcon className="mr-[8px]" />
        <span>Settings</span>
      </div>
    </div>
  )
}
