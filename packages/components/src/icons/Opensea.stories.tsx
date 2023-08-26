import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Opensea as OpenseaIcon } from './opensea'
import { IconWrapper } from './ArrowBack'

const OpenseaMeta = {
  title: 'Icons/Opensea',
  component: OpenseaIcon,
} satisfies Meta<typeof OpenseaIcon>

export default OpenseaMeta

type Story = StoryObj<typeof OpenseaIcon>

export const Opensea: Story = {
  render: () => (
    <IconWrapper>
      <OpenseaIcon />
    </IconWrapper>
  ),
}
