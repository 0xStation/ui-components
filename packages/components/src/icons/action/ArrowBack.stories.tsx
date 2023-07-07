import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowBack as ArrowBackIcon } from './ArrowBack'

const ArrowBackMeta = {
  title: 'Icons/Actions/ArrowBack',
  component: ArrowBackIcon,
} satisfies Meta<typeof ArrowBackIcon>

export default ArrowBackMeta

type Story = StoryObj<typeof ArrowBackIcon>

export const ArrowBack: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <ArrowBackIcon />
    </div>
  ),
}
