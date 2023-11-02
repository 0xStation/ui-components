import React from 'react'
import clsx from 'clsx'

export const Send = ({ className, fill, ...props }: Omit<React.SVGProps<SVGSVGElement>, 'xmlns' | 'viewBox'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || 'currentColor'}
      className={clsx(className || 'ui-w-6 ui-h-6 ui-aspect-square')}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}
