import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Cross as CrossIcon } from './cross'
const CrossMeta = {
  title: 'Icons/Cross',
  component: CrossIcon,
} satisfies Meta<typeof CrossIcon>

export default CrossMeta

type Story = StoryObj<typeof CrossIcon>

export const Cross: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <CrossIcon />
    </div>
  ),
}
