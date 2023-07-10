import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Opensea as OpenseaIcon } from './opensea'

const OpenseaMeta = {
  title: 'Icons/Opensea',
  component: OpenseaIcon,
} satisfies Meta<typeof OpenseaIcon>

export default OpenseaMeta

type Story = StoryObj<typeof OpenseaIcon>

export const Opensea: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <OpenseaIcon />
    </div>
  ),
}
