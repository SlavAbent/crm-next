import React from 'react'

export const ExpandIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 32,
  height = 32,
  stroke = 'currentColor',
  fill = 'currentColor',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      {...props}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 6-6 6 6 6" />
      <path d="M3 12h14" />
      <path d="M21 19V5" />
    </svg>
  )
}
