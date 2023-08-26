import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowBack as ArrowBackIcon, IconWrapper } from './ArrowBack'

const ArrowBackMeta = {
  title: 'Icons/ArrowBack',
  component: ArrowBackIcon,
} satisfies Meta<typeof ArrowBackIcon>

export default ArrowBackMeta

type Story = StoryObj<typeof ArrowBackIcon>

export const ArrowBack: Story = {
  render: () => (
    <IconWrapper>
      <ArrowBackIcon />
    </IconWrapper>
  ),
}

