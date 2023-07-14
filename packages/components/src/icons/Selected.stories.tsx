import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Selected as SelectedIcon } from './selected'

const SelectedMeta = {
  title: 'Icons/Selected',
  component: SelectedIcon,
} satisfies Meta<typeof SelectedIcon>

export default SelectedMeta

type Story = StoryObj<typeof SelectedIcon>

export const Selected: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <SelectedIcon />
    </div>
  ),
}
