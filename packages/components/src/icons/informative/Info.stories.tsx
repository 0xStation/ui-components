import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Info as InfoIcon } from './info'

const InfoMeta = {
  title: 'Icons/Informative/Info',
  component: InfoIcon,
} satisfies Meta<typeof InfoIcon>

export default InfoMeta

type Story = StoryObj<typeof InfoIcon>

export const Info: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <InfoIcon />
    </div>
  ),
}
