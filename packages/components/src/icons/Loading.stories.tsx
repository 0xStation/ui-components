import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Loading as LoadingIcon } from './loading'
import { IconWrapper } from './arrowBack'

const LoadingMeta = {
  title: 'Icons/Loading',
  component: LoadingIcon,
} satisfies Meta<typeof LoadingIcon>

export default LoadingMeta

type Story = StoryObj<typeof LoadingIcon>

export const Loading: Story = {
  render: () => (
    <IconWrapper>
      <LoadingIcon />
    </IconWrapper>
  ),
}
