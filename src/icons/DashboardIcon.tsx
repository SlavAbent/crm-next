import React from "react";

export const DashboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 32,
  height = 32,
  stroke = "currentColor",
  fill = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M15 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
}