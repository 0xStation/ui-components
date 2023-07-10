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
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <SelectedIcon />
    </div>
  ),
}
