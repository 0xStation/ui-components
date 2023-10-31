import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Plus as PlusIcon } from './plus'
import { IconWrapper } from './arrowBack'

const PlusMeta = {
  title: 'Icons/Plus',
  component: PlusIcon,
} satisfies Meta<typeof PlusIcon>

export default PlusMeta

type Story = StoryObj<typeof PlusIcon>

export const Plus: Story = {
  render: () => (
    <IconWrapper>
      <PlusIcon />
    </IconWrapper>
  ),
}
