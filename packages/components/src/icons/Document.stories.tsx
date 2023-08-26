import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Document as DocumentIcon } from './Document'
import { IconWrapper } from './arrowBack'

const DocumentMeta = {
  title: 'Icons/Document',
  component: DocumentIcon,
} satisfies Meta<typeof DocumentIcon>

export default DocumentMeta

type Story = StoryObj<typeof DocumentIcon>

export const Document: Story = {
  render: () => (
    <IconWrapper>
      <DocumentIcon />
    </IconWrapper>
  ),
}
