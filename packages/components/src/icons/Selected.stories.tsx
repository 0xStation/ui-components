import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Selected as SelectedIcon } from './selected'
import { IconWrapper } from './ArrowBack.stories'

const SelectedMeta = {
  title: 'Icons/Selected',
  component: SelectedIcon,
} satisfies Meta<typeof SelectedIcon>

export default SelectedMeta

type Story = StoryObj<typeof SelectedIcon>

export const Selected: Story = {
  render: () => (
    <IconWrapper>
      <SelectedIcon />
    </IconWrapper>
  ),
}
