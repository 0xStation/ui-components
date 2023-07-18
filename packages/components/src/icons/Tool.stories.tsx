import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tool as ToolIcon } from './tool'
import { IconWrapper } from './ArrowBack.stories'

const ToolMeta = {
  title: 'Icons/Tool',
  component: ToolIcon,
} satisfies Meta<typeof ToolIcon>

export default ToolMeta

type Story = StoryObj<typeof ToolIcon>

export const Tool: Story = {
  render: () => (
    <IconWrapper>
      <ToolIcon />
    </IconWrapper>
  ),
}
