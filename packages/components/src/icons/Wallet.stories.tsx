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
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <WalletIcon />
    </div>
  ),
}
