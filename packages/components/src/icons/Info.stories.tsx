import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Info as InfoIcon } from './info'

const InfoMeta = {
  title: 'Icons/Info',
  component: InfoIcon,
} satisfies Meta<typeof InfoIcon>

export default InfoMeta

type Story = StoryObj<typeof InfoIcon>

export const Info: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <InfoIcon />
    </div>
  ),
}
