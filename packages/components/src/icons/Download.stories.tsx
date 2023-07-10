import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Download as DownloadIcon } from './Download'

const DownloadMeta = {
  title: 'Icons/Download',
  component: DownloadIcon,
} satisfies Meta<typeof DownloadIcon>

export default DownloadMeta

type Story = StoryObj<typeof DownloadIcon>

export const Download: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <DownloadIcon />
    </div>
  ),
}
