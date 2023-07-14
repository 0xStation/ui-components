import React from 'react'
import clsx from 'clsx'

export const Loading = ({
  className,
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, 'xmlns' | 'viewBox' | 'strokeWidth'>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className || 'ui-w-6 ui-h-6 ui-aspect-square')}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1365 21.5H12.8638V17.2364H11.1365V21.5ZM16.3132 15.0921L15.0921 16.3133L18.1068 19.3283L19.3282 18.1068L16.3132 15.0921ZM17.2363 11.1365V12.8635H21.5V11.1365H17.2363ZM15.092 7.68673L16.3132 8.90791L19.3283 5.89322L18.1068 4.67178L15.092 7.68673ZM11.1364 6.76365H12.8637V2.5H11.1364V6.76365ZM5.89325 4.67179L4.67181 5.89324L7.68684 8.90793L8.90802 7.68675L5.89325 4.67179ZM2.5 11.1364V12.8634H6.76367V11.1364H2.5ZM4.67181 18.1067L5.89325 19.3281L8.90796 16.3131L7.68677 15.0919L4.67181 18.1067Z"
        fill="white"
      />
    </svg>
  )
}
