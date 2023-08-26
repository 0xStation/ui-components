import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { View as ViewIcon } from './view'
import { IconWrapper } from './arrowBack'

const ViewMeta = {
  title: 'Icons/View',
  component: ViewIcon,
} satisfies Meta<typeof ViewIcon>

export default ViewMeta

type Story = StoryObj<typeof ViewIcon>

export const View: Story = {
  render: () => (
    <IconWrapper>
      <ViewIcon />
    </IconWrapper>
  ),
}
