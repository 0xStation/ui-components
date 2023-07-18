import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowBack as ArrowBackIcon } from './ArrowBack'

const ArrowBackMeta = {
  title: 'Icons/ArrowBack',
  component: ArrowBackIcon,
} satisfies Meta<typeof ArrowBackIcon>

export default ArrowBackMeta

type Story = StoryObj<typeof ArrowBackIcon>

export const ArrowBack: Story = {
  render: () => (
    <IconWrapper>
      <ArrowBackIcon />
    </IconWrapper>
  ),
}

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="ui-bg-gray-90 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
    {children}
  </div>
)
