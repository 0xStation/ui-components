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
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <CloseIcon />
    </div>
  ),
}
