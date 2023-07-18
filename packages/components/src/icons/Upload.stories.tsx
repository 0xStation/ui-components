import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Upload as UploadIcon } from './upload'
import { IconWrapper } from './ArrowBack.stories'

const UploadMeta = {
  title: 'Icons/Upload',
  component: UploadIcon,
} satisfies Meta<typeof UploadIcon>

export default UploadMeta

type Story = StoryObj<typeof UploadIcon>

export const Upload: Story = {
  render: () => (
    <IconWrapper>
      <UploadIcon />
    </IconWrapper>
  ),
}
