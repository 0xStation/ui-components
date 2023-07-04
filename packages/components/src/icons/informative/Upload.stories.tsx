import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Upload as UploadIcon } from './upload'

const UploadMeta = {
  title: 'Icons/Informative/Upload',
  component: UploadIcon,
} satisfies Meta<typeof UploadIcon>

export default UploadMeta

type Story = StoryObj<typeof UploadIcon>

export const Upload: Story = {
  render: () => (
    <div className="bg-slate-800 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <UploadIcon />
    </div>
  ),
}
