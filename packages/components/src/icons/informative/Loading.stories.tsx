import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Loading as LoadingIcon } from './loading'

const LoadingMeta = {
  title: 'Icons/Informative/Loading',
  component: LoadingIcon,
} satisfies Meta<typeof LoadingIcon>

export default LoadingMeta

type Story = StoryObj<typeof LoadingIcon>

export const Loading: Story = {
  render: () => (
    <div className="bg-slate-800 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <LoadingIcon />
    </div>
  ),
}
