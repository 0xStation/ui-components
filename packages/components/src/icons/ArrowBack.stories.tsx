import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowBack as ArrowBackIcon } from './ArrowBack'

const ArrowBackMeta = {
  title: 'Icons/ArrowBack',
  component: ArrowBackIcon,
} satisfies Meta<typeof ArrowBackIcon>

export default ArrowBackMeta

type Story = StoryObj<typeof ArrowBackIcon>

export const ArrowBack: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <ArrowBackIcon />
    </div>
  ),
}
