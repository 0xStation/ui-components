import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pencil as PencilIcon } from './Pencil'

const PencilMeta = {
  title: 'Icons/Pencil',
  component: PencilIcon,
} satisfies Meta<typeof PencilIcon>

export default PencilMeta

type Story = StoryObj<typeof PencilIcon>

export const Pencil: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <PencilIcon />
    </div>
  ),
}
