import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Discord as DiscordIcon } from './discord'

const DiscordMeta = {
  title: 'Icons/Discord',
  component: DiscordIcon,
} satisfies Meta<typeof DiscordIcon>

export default DiscordMeta

type Story = StoryObj<typeof DiscordIcon>

export const Discord: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <DiscordIcon />
    </div>
  ),
}
