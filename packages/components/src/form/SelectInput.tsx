import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export const SelectInput = ({
  register,
  name,
  required = true,
  options,
  selectOptions,
}: {
  register: UseFormRegister<FieldValues>
  name: string
  required?: boolean
  options?: any
  selectOptions: { value: string; children: React.ReactNode }[]
}) => {
  return (
    <select
      className="ui-bg-gray-90 ui-rounded-md ui-border-none ui-h-11 ui-px-3 ui-py-2 ui-w-full ui-text-white"
      {...register(name, { required, ...options })}
    >
      <option value="" disabled>
        Please select an option
      </option>
      {selectOptions.map(({ value, children }, i) => (
        <option value={value} key={`${name}-${i}`}>
          {children}
        </option>
      ))}
    </select>
  )
}
