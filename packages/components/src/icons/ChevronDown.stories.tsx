import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChevronDown as ChevronDownIcon } from './ChevronDown'
import { IconWrapper } from './ArrowBack'

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
