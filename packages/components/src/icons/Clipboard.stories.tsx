import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Clipboard as ClipboardIcon } from './Clipboard'
import { IconWrapper } from './ArrowBack'

const ClipboardMeta = {
  title: 'Icons/Clipboard',
  component: ClipboardIcon,
} satisfies Meta<typeof ClipboardIcon>

export default ClipboardMeta

type Story = StoryObj<typeof ClipboardIcon>

export const Clipboard: Story = {
  render: () => (
    <IconWrapper>
      <ClipboardIcon />
    </IconWrapper>
  ),
}
