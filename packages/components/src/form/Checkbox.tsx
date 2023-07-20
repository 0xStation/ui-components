import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export const Checkbox = ({
  name,
  register,
  required,
}: {
  name: string
  register: UseFormRegister<FieldValues>
  required?: boolean
}) => {
  return (
    <input
      type="checkbox"
      className="ui-bg-black ui-rounded-sm ui-border-1 ui-border-gray-50"
      {...register(name, { required: !!required })}
    />
  )
}
