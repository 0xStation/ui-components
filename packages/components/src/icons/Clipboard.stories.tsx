import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Clipboard as ClipboardIcon } from './Clipboard'

const ClipboardMeta = {
  title: 'Icons/Clipboard',
  component: ClipboardIcon,
} satisfies Meta<typeof ClipboardIcon>

export default ClipboardMeta

type Story = StoryObj<typeof ClipboardIcon>

export const Clipboard: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <ClipboardIcon />
    </div>
  ),
}
