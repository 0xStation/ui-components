import clsx from 'clsx'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export type InputGroupProps = {
  label: string
  index: number
  children: React.ReactElement
  onCloseAction?: (index?: number) => void
  className?: string
}

export const InputGroup = ({ label, index, onCloseAction, className, children }: InputGroupProps) => {
  return (
    <div className={clsx('ui-bg-gray-100 ui-p-4 ui-rounded', className)}>
      <div className="ui-flex ui-flex-row ui-justify-between ui-items-center ui-mb-6">
        <span className="ui-text-xs ui-text-gray-50">
          {label} {index + 1}
        </span>
        <XMarkIcon
          className="ui-h-6 ui-w-6 ui-text-gray-50 ui-hover:text-gray-40 ui-transition-colors ui-cursor-pointer"
          aria-hidden="true"
          onClick={() => {
            onCloseAction?.(index)
          }}
        />
      </div>
      <section className="ui-space-y-4">{children}</section>
    </div>
  )
}
