import React from 'react'
import clsx from 'clsx'

export const ChevronDown = ({
  className,
  fill,
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, 'xmlns' | 'viewBox'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || '#ffffff'}
      className={clsx(className || 'ui-w-6 ui-h-6 ui-aspect-square')}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}
