import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Wallet as WalletIcon } from './wallet'

const WalletMeta = {
  title: 'Icons/Informative/Wallet',
  component: WalletIcon,
} satisfies Meta<typeof WalletIcon>

export default WalletMeta

type Story = StoryObj<typeof WalletIcon>

export const Wallet: Story = {
  render: () => (
    <div style={{
      backgroundColor: '#000000',
      width: 100,
      height: 100,
      border: '1px dashed #e2e2e2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <WalletIcon />
    </div>
  ),
}
