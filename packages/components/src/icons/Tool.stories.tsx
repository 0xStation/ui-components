import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tool as ToolIcon } from './tool'

const ToolMeta = {
  title: 'Icons/Tool',
  component: ToolIcon,
} satisfies Meta<typeof ToolIcon>

export default ToolMeta

type Story = StoryObj<typeof ToolIcon>

export const Tool: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <ToolIcon />
    </div>
  ),
}
