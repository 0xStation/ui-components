import React from 'react'
import clsx from 'clsx'

export const Plus = ({ className, fill, ...props }: Omit<React.SVGProps<SVGSVGElement>, 'xmlns' | 'viewBox'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || '#ffffff'}
      className={clsx(className || 'ui-w-6 ui-h-6 ui-aspect-square')}
      {...props}
    >
      <path d="m12.5 4.625c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033v6.75h6.75c.1989 0 .3897.079.5303.2197.1407.1406.2197.3314.2197.5303s-.079.3897-.2197.5303c-.1406.1407-.3314.2197-.5303.2197h-6.75v6.75c0 .1989-.079.3897-.2197.5303-.1406.1407-.3314.2197-.5303.2197s-.3897-.079-.5303-.2197c-.1407-.1406-.2197-.3314-.2197-.5303v-6.75h-6.75c-.19891 0-.38968-.079-.53033-.2197-.14065-.1406-.21967-.3314-.21967-.5303s.07902-.3897.21967-.5303c.14065-.1407.33142-.2197.53033-.2197h6.75v-6.75c0-.19891.079-.38968.2197-.53033.1406-.14065.3314-.21967.5303-.21967z" />
    </svg>
  )
}