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
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <ChevronUpIcon />
    </div>
  ),
}
