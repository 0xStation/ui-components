import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Error as ErrorIcon } from './error'

const ErrorMeta = {
  title: 'Icons/Error',
  component: ErrorIcon,
} satisfies Meta<typeof ErrorIcon>

export default ErrorMeta

type Story = StoryObj<typeof ErrorIcon>

export const Error: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <ErrorIcon />
    </div>
  ),
}
