import * as React from 'react'

import clsx from 'clsx'

export type InputSize = 'small' | 'large'
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize
  icon?: React.ReactElement
}

const sizeMap: { [key in InputSize]: string } = {
  small: 'ui-text-base',
  large: 'ui-text-lg',
}

const RawInput = React.forwardRef<HTMLInputElement, Omit<InputProps, 'icon'>>(
  ({ className, type, inputSize = 'small', ...props }, ref) => {
    return (
      <input
        type={type}
        className={clsx(
          'ui-relative ui-rounded-md ui-h-11 ui-px-3 ui-py-2 ui-w-full ui-text-white ui-bg-gray-90 hover:ui-bg-gray-80 ui-shadow-sm ui-transition-colors focus-visible:ui-outline-none focus-visible:ui-ring-1 ui-border-transparent ui-outline-none focus-visible:ui-border-gray-90 disabled:ui-cursor-not-allowed disabled:ui-opacity-50',
          sizeMap[inputSize],
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ icon, ...props }, ref) => {
  if (!!icon) {
    return (
      <span className="ui-relative">
        <RawInput {...props} />
        <span className="ui-absolute ui-right-3 ui-top-[-1px]">{icon}</span>
      </span>
    )
  }

  return <RawInput {...props} />
})

Input.displayName = 'Input'

export { Input }
