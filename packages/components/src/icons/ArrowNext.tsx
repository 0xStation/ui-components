import React from 'react'
import clsx from 'clsx'

export const ArrowNext = ({
  className,
  fill,
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, 'xmlns' | 'viewBox' | 'strokeWidth'>) => {
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
        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}
