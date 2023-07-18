import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChevronDown as ChevronDownIcon } from './chevronDown'
import { IconWrapper } from './ArrowBack.stories'

const ChevronDownMeta = {
  title: 'Icons/ChevronDown',
  component: ChevronDownIcon,
} satisfies Meta<typeof ChevronDownIcon>

export default ChevronDownMeta

type Story = StoryObj<typeof ChevronDownIcon>

export const ChevronDown: Story = {
  render: () => (
    <IconWrapper>
      <ChevronDownIcon />
    </IconWrapper>
  ),
}
