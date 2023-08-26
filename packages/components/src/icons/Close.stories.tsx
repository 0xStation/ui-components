import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Close as CloseIcon } from './close'
import { IconWrapper } from './ArrowBack'

const CloseMeta = {
  title: 'Icons/Close',
  component: CloseIcon,
} satisfies Meta<typeof CloseIcon>

export default CloseMeta

type Story = StoryObj<typeof CloseIcon>

export const Close: Story = {
  render: () => (
    <IconWrapper>
      <CloseIcon />
    </IconWrapper>
  ),
}
