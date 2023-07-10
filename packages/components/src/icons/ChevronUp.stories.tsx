import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChevronUp as ChevronUpIcon } from './ChevronUp'

const ChevronUpMeta = {
  title: 'Icons/ChevronUp',
  component: ChevronUpIcon,
} satisfies Meta<typeof ChevronUpIcon>

export default ChevronUpMeta

type Story = StoryObj<typeof ChevronUpIcon>

export const ChevronUp: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <ChevronUpIcon />
    </div>
  ),
}
