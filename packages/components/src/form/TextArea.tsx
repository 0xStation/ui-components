import clsx from 'clsx'
import React from 'react'
import { FieldValues, FieldError, DeepMap, UseFormRegister, RegisterOptions } from 'react-hook-form'

export type InputSize = 'small' | 'large'
export type TextAreaProps = {
  name: string
  register: UseFormRegister<FieldValues>
  rules?: RegisterOptions
  errors?: Partial<DeepMap<FieldValues, FieldError>>
  placeholder?: string
  required?: boolean
  disabled?: boolean
  size?: InputSize
  className?: string
}

const sizeMap: { [key in InputSize]: string } = {
  small: 'ui-text-base',
  large: 'ui-text-lg',
}

export const TextArea = ({
  register,
  rules,
  errors,
  name,
  placeholder,
  required = true,
  disabled = false,
  size = 'small',
  className = '',
}: TextAreaProps) => {
  if (required && !rules) {
    rules = { required: 'Complete this field to continue.' }
  } else if (required && rules) {
    rules = { ...rules, required: 'Complete this field to continue.' }
  }

  const errorMessage = errors?.[name]
  const hasError = !!(errors && errorMessage)

  return (
    <div className={clsx('ui-relative', className)} aria-live="polite">
      <textarea
        className={clsx(
          'ui-bg-gray-90 hover:ui-bg-gray-80 ui-rounded-md ui-px-3 ui-py-2 ui-w-full ui-text-white ui-resize-none',
          hasError
            ? 'ui-border ui-border-red-100'
            : 'ui-border-transparent ui-outline-none ui-focus:ring-gray-30 ui-focus:border-gray-90',
          sizeMap[size],
          disabled ? 'placeholder:ui-text-gray-50 ui-text-gray-50 ui-cursor-not-allowed ui-pointer-events-none' : '',
        )}
        rows={4}
        placeholder={placeholder}
        aria-invalid={hasError}
        {...register(name, rules)}
        disabled={disabled}
      />
      {hasError && <p className="ui-text-red-100 ui-text-xs ui-mt-1">{errorMessage.message}</p>}
    </div>
  )
}
