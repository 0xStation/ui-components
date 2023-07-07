import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Clipboard as ClipboardIcon } from './Clipboard'

const ClipboardMeta = {
  title: 'Icons/Actions/Clipboard',
  component: ClipboardIcon,
} satisfies Meta<typeof ClipboardIcon>

export default ClipboardMeta

type Story = StoryObj<typeof ClipboardIcon>

export const Clipboard: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <ClipboardIcon />
    </div>
  ),
}
