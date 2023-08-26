import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Discord as DiscordIcon } from './Discord'
import { IconWrapper } from './ArrowBack'

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
