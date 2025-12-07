import clsx from 'clsx'

export const HeaderAside = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        'w-full text-center text-[40px] leading-[140%] font-semibold',
        className,
      )}
    >
      <span>Dailys</span>
    </div>
  )
}
