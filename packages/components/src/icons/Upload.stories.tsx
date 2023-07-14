import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Upload as UploadIcon } from './upload'

const UploadMeta = {
  title: 'Icons/Upload',
  component: UploadIcon,
} satisfies Meta<typeof UploadIcon>

export default UploadMeta

type Story = StoryObj<typeof UploadIcon>

export const Upload: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <UploadIcon />
    </div>
  ),
}
