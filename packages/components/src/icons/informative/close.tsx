import React from 'react'
import clsx from 'clsx'

export const Close = ({
  className,
  stroke,
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, 'xmlns' | 'fill' | 'viewBox' | 'strokeWidth'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke || '#858585'}
      className={clsx(className || 'w-6 h-6 aspect-square')}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
