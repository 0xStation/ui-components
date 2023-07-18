import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Info as InfoIcon } from './info'
import { IconWrapper } from './ArrowBack.stories'

const InfoMeta = {
  title: 'Icons/Info',
  component: InfoIcon,
} satisfies Meta<typeof InfoIcon>

export default InfoMeta

type Story = StoryObj<typeof InfoIcon>

export const Info: Story = {
  render: () => (
    <IconWrapper>
      <InfoIcon />
    </IconWrapper>
  ),
}
