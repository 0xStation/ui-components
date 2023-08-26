import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChevronUp as ChevronUpIcon } from './ChevronUp'
import { IconWrapper } from './arrowBack'

const ChevronUpMeta = {
  title: 'Icons/ChevronUp',
  component: ChevronUpIcon,
} satisfies Meta<typeof ChevronUpIcon>

export default ChevronUpMeta

type Story = StoryObj<typeof ChevronUpIcon>

export const ChevronUp: Story = {
  render: () => (
    <IconWrapper>
      <ChevronUpIcon />
    </IconWrapper>
  ),
}
