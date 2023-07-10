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
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <EtherscanIcon />
    </div>
  ),
}
