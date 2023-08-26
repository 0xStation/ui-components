import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '.'
import { Info } from '../icons/info'

const TooltipMeta = {
  title: 'Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>

export default TooltipMeta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <div className="">
      <Tooltip>
        <div className='ui-bg-gray-80 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md'>
          <Tooltip.Trigger className="ui-text-white">
            <Info />
          </Tooltip.Trigger>
        </div>
        <Tooltip.Content className="ui-max-w-sm">
          Displays rich content in a portal, triggered by a button.
        </Tooltip.Content>
      </Tooltip>
    </div>
  ),
}
