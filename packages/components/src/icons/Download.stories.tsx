import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Download as DownloadIcon } from './download'
import { IconWrapper } from './ArrowBack'

const DownloadMeta = {
  title: 'Icons/Download',
  component: DownloadIcon,
} satisfies Meta<typeof DownloadIcon>

export default DownloadMeta

type Story = StoryObj<typeof DownloadIcon>

export const Download: Story = {
  render: () => (
    <IconWrapper>
      <DownloadIcon />
    </IconWrapper>
  ),
}
