import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChevronDown as ChevronDownIcon } from './ChevronDown'

const ChevronDownMeta = {
  title: 'Icons/ChevronDown',
  component: ChevronDownIcon,
} satisfies Meta<typeof ChevronDownIcon>

export default ChevronDownMeta

type Story = StoryObj<typeof ChevronDownIcon>

export const ChevronDown: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <ChevronDownIcon />
    </div>
  ),
}
