import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pencil as PencilIcon } from './pencil'
import { IconWrapper } from './arrowBack'

const PencilMeta = {
  title: 'Icons/Pencil',
  component: PencilIcon,
} satisfies Meta<typeof PencilIcon>

export default PencilMeta

type Story = StoryObj<typeof PencilIcon>

export const Pencil: Story = {
  render: () => (
    <IconWrapper>
      <PencilIcon />
    </IconWrapper>
  ),
}
