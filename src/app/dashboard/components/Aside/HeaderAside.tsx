import { DashboardIcon } from '@/icons/DashboardIcon'
import clsx from 'clsx'

export const HeaderAside = ({
                              className
                            }: {
  className: string;
}) => {
  return (
    <div
      className={clsx(
        'font-semibold leading-[140%] text-[40px] text-center w-full', className
      )}
    >
      <span>Dailys</span>
    </div>
  )
}
