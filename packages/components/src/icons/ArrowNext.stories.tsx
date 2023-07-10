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
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <ArrowNextIcon />
    </div>
  ),
}
