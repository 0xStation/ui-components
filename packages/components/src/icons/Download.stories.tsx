import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Download as DownloadIcon } from './download'

const DownloadMeta = {
  title: 'Icons/Download',
  component: DownloadIcon,
} satisfies Meta<typeof DownloadIcon>

export default DownloadMeta

type Story = StoryObj<typeof DownloadIcon>

export const Download: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <DownloadIcon />
    </div>
  ),
}
