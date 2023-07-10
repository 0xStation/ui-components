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
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <ErrorIcon />
    </div>
  ),
}
