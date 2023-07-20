import React from 'react'
import { FieldValues, UseFormRegister, DeepMap, FieldError } from 'react-hook-form'
import { TextInput, InputSize } from './TextInput'

export const AddressInput = ({
  name,
  register,
  errors,
  required,
  placeholder = '0x...',
  disabled,
  size,
  className,
}: {
  name: string
  register: UseFormRegister<FieldValues>
  errors?: Partial<DeepMap<FieldValues, FieldError>>
  placeholder?: string
  required?: boolean
  disabled?: boolean
  size?: InputSize
  className?: string
}) => {
  return (
    <TextInput
      register={register}
      required={required}
      name={name}
      rules={{
        pattern: {
          value: /^0x[0-9a-fA-F]{40}$/,
          message: 'Invalid address.',
        },
      }}
      errors={errors}
      disabled={disabled}
      size={size}
      placeholder={placeholder}
    />
  )
}
