import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Wallet as WalletIcon } from './wallet'
import { IconWrapper } from './ArrowBack'

const WalletMeta = {
  title: 'Icons/Wallet',
  component: WalletIcon,
} satisfies Meta<typeof WalletIcon>

export default WalletMeta

type Story = StoryObj<typeof WalletIcon>

export const Wallet: Story = {
  render: () => (
    <IconWrapper>
      <WalletIcon />
    </IconWrapper>
  ),
}
