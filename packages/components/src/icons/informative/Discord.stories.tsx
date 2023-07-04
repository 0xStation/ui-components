import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Discord as DiscordIcon } from './discord'

const DiscordMeta = {
  title: 'Icons/Informative/Discord',
  component: DiscordIcon,
} satisfies Meta<typeof DiscordIcon>

export default DiscordMeta

type Story = StoryObj<typeof DiscordIcon>

export const Discord: Story = {
  render: () => (
    <div className="bg-slate-800 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <DiscordIcon />
    </div>
  ),
}
