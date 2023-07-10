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
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <CrossIcon />
    </div>
  ),
}
