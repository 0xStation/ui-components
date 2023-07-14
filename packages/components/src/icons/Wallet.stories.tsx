import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Wallet as WalletIcon } from './wallet'

const WalletMeta = {
  title: 'Icons/Wallet',
  component: WalletIcon,
} satisfies Meta<typeof WalletIcon>

export default WalletMeta

type Story = StoryObj<typeof WalletIcon>

export const Wallet: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <WalletIcon />
    </div>
  ),
}
