import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Cross as CrossIcon } from './cross'
import { IconWrapper } from './ArrowBack'
const CrossMeta = {
  title: 'Icons/Cross',
  component: CrossIcon,
} satisfies Meta<typeof CrossIcon>

export default CrossMeta

type Story = StoryObj<typeof CrossIcon>

export const Cross: Story = {
  render: () => (
    <IconWrapper>
      <CrossIcon />
    </IconWrapper>
  ),
}
