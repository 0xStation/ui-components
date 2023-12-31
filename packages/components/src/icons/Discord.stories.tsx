import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Discord as DiscordIcon } from './discord'
import { IconWrapper } from './arrowBack'

const DiscordMeta = {
  title: 'Icons/Discord',
  component: DiscordIcon,
} satisfies Meta<typeof DiscordIcon>

export default DiscordMeta

type Story = StoryObj<typeof DiscordIcon>

export const Discord: Story = {
  render: () => (
    <IconWrapper>
      <DiscordIcon />
    </IconWrapper>
  ),
}
