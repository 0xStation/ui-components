import React from 'react'
import clsx from 'clsx'

export const Search = ({
  className,
  stroke,
  strokeWidth,
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, 'xmlns' | 'fill' | 'viewBox'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth || 1.5}
      stroke={stroke || '#ffffff'}
      className={clsx(className || 'ui-w-6 ui-h-6 ui-aspect-square')}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
}
