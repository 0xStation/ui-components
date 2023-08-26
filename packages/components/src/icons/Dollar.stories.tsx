import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dollar as DollarIcon } from './Dollar'
import { IconWrapper } from './arrowBack'

const DollarMeta = {
  title: 'Icons/Dollar',
  component: DollarIcon,
} satisfies Meta<typeof DollarIcon>

export default DollarMeta

type Story = StoryObj<typeof DollarIcon>

export const Dollar: Story = {
  render: () => (
    <IconWrapper>
      <DollarIcon />
    </IconWrapper>
  ),
}
