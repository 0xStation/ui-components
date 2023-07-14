import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Loading as LoadingIcon } from './loading'

const LoadingMeta = {
  title: 'Icons/Loading',
  component: LoadingIcon,
} satisfies Meta<typeof LoadingIcon>

export default LoadingMeta

type Story = StoryObj<typeof LoadingIcon>

export const Loading: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <LoadingIcon />
    </div>
  ),
}
