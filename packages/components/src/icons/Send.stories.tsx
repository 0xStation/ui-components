import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Send as SendIcon } from './Send'
import { IconWrapper } from './arrowBack'

const SendMeta = {
  title: 'Icons/Send',
  component: SendIcon,
} satisfies Meta<typeof SendIcon>

export default SendMeta

type Story = StoryObj<typeof SendIcon>

export const Send: Story = {
  render: () => (
    <IconWrapper>
      <SendIcon fill="#ffffff" />
    </IconWrapper>
  ),
}
