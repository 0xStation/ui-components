import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { View as ViewIcon } from './view'

const ViewMeta = {
  title: 'Icons/View',
  component: ViewIcon,
} satisfies Meta<typeof ViewIcon>

export default ViewMeta

type Story = StoryObj<typeof ViewIcon>

export const View: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <ViewIcon />
    </div>
  ),
}
