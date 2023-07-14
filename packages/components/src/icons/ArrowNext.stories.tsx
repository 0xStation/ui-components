import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowNext as ArrowNextIcon } from './ArrowNext'

const ArrowNextMeta = {
  title: 'Icons/ArrowNext',
  component: ArrowNextIcon,
} satisfies Meta<typeof ArrowNextIcon>

export default ArrowNextMeta

type Story = StoryObj<typeof ArrowNextIcon>

export const ArrowNext: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <ArrowNextIcon />
    </div>
  ),
}
