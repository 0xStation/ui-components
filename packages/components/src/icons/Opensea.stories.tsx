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
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <OpenseaIcon />
    </div>
  ),
}
