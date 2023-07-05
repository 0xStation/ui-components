import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tool as ToolIcon } from './tool'

const ToolMeta = {
  title: 'Icons/Informative/Tool',
  component: ToolIcon,
} satisfies Meta<typeof ToolIcon>

export default ToolMeta

type Story = StoryObj<typeof ToolIcon>

export const Tool: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <ToolIcon />
    </div>
  ),
}
