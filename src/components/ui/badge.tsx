import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const colorVariants = cva('w-[16px] h-[16px] mr-[6px] rounded-full', {
  variants: {
    color: {
      grey: 'bg-[#C9D1D3]',
      red: 'bg-[#FF6464]',
      blue: 'bg-[#64C4ED]',
      green: 'bg-[#42B883]',
      pink: 'bg-[#FFBBCC]',
      lime: 'bg-[#B6E6BD]',
      purple: 'bg-[#C355F5]',
      black: 'bg-[#110133]',
    } as Record<string, string>,
  },
  defaultVariants: {
    color: 'grey',
  },
})

function Badge({
  className,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof colorVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(colorVariants({ color }), className)}
      {...props}
    />
  )
}

export { Badge, colorVariants }
