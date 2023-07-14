import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pencil as PencilIcon } from './pencil'

const PencilMeta = {
  title: 'Icons/Pencil',
  component: PencilIcon,
} satisfies Meta<typeof PencilIcon>

export default PencilMeta

type Story = StoryObj<typeof PencilIcon>

export const Pencil: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <PencilIcon />
    </div>
  ),
}
