import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowNext as ArrowNextIcon } from './ArrowNext'
import { IconWrapper } from './arrowBack'

const ArrowNextMeta = {
  title: 'Icons/ArrowNext',
  component: ArrowNextIcon,
} satisfies Meta<typeof ArrowNextIcon>

export default ArrowNextMeta

type Story = StoryObj<typeof ArrowNextIcon>

export const ArrowNext: Story = {
  render: () => (
    <IconWrapper>
      <ArrowNextIcon />
    </IconWrapper>
  ),
}
