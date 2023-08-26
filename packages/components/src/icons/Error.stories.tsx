import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Error as ErrorIcon } from './error'
import { IconWrapper } from './ArrowBack'

const ErrorMeta = {
  title: 'Icons/Error',
  component: ErrorIcon,
} satisfies Meta<typeof ErrorIcon>

export default ErrorMeta

type Story = StoryObj<typeof ErrorIcon>

export const Error: Story = {
  render: () => (
    <IconWrapper>
      <ErrorIcon />
    </IconWrapper>
  ),
}
