import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Etherscan as EtherscanIcon } from './etherscan'

const EtherscanMeta = {
  title: 'Icons/Etherscan',
  component: EtherscanIcon,
} satisfies Meta<typeof EtherscanIcon>

export default EtherscanMeta

type Story = StoryObj<typeof EtherscanIcon>

export const Etherscan: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <EtherscanIcon />
    </div>
  ),
}
