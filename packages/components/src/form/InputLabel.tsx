import clsx from 'clsx'
import React from 'react'

export type InputLabelSize = 'small' | 'large'
export type InputLabelProps = {
  label: string
  children: React.ReactNode
  description?: string
  required?: boolean
  size?: InputLabelSize
  className?: string
}

const labelSizeMap: { [key in InputLabelSize]: string } = {
  small: 'ui-text-base',
  large: 'ui-text-lg',
}

const descriptionSizeMap: { [key in InputLabelSize]: string } = {
  small: 'ui-text-xs',
  large: 'ui-text-sm',
}

export const InputLabel = ({
  label,
  description,
  children,
  size = 'small',
  required = true,
  className = '',
}: InputLabelProps) => {
  return (
    <div className={clsx('ui-flex ui-flex-col', className)}>
      <label className={clsx('ui-text-white block', labelSizeMap[size])}>{`${label}${required && '*'}`}</label>
      <span className={clsx('ui-text-gray-50 block ui-mb-1', descriptionSizeMap[size])}>{description}</span>
      {children}
    </div>
  )
}
