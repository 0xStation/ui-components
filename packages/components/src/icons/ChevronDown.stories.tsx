import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChevronDown as ChevronDownIcon } from './chevronDown'

const ChevronDownMeta = {
  title: 'Icons/ChevronDown',
  component: ChevronDownIcon,
} satisfies Meta<typeof ChevronDownIcon>

export default ChevronDownMeta

type Story = StoryObj<typeof ChevronDownIcon>

export const ChevronDown: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <ChevronDownIcon />
    </div>
  ),
}
