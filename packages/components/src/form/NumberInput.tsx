import clsx from 'clsx'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export function NumberInput({
  errorMessage,
  placeholder,
  register,
  options,
  name,
  decimals = 0,
}: {
  name: string
  register: UseFormRegister<FieldValues>
  errorMessage?: string
  placeholder?: string
  options?: any
  decimals?: number
}) {
  return (
    <>
      <input
        type="number"
        {...register(name, options)}
        className={clsx(
          'ui-bg-gray-90 ui-rounded-md ui-h-11 ui-px-3 ui-py-2 ui-w-full ui-text-white',
          errorMessage
            ? 'ui-border ui-border-red-100'
            : 'ui-border-transparent ui-outline-none ui-focus:ring-gray-30 ui-focus:border-gray-90',
        )}
        placeholder={placeholder}
        step={10 ** (-1 * decimals)}
      />
      {errorMessage && <p className="ui-text-red-100 ui-text-xs ui-mt-1">{errorMessage}</p>}
    </>
  )
}
