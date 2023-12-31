import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Swap as SwapIcon } from './swap'
import { IconWrapper } from './arrowBack'

const SwapMeta = {
  title: 'Icons/Swap',
  component: SwapIcon,
} satisfies Meta<typeof SwapIcon>

export default SwapMeta

type Story = StoryObj<typeof SwapIcon>

export const Swap: Story = {
  render: () => (
    <IconWrapper>
      <SwapIcon fill="#ffffff" />
    </IconWrapper>
  ),
}
