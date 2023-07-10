import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Close as CloseIcon } from './Close'

const CloseMeta = {
  title: 'Icons/Close',
  component: CloseIcon,
} satisfies Meta<typeof CloseIcon>

export default CloseMeta

type Story = StoryObj<typeof CloseIcon>

export const Close: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <CloseIcon />
    </div>
  ),
}
