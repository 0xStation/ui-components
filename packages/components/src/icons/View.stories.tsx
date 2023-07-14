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
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <ViewIcon />
    </div>
  ),
}
