import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Etherscan as EtherscanIcon } from './etherscan'
import { IconWrapper } from './ArrowBack'

const EtherscanMeta = {
  title: 'Icons/Etherscan',
  component: EtherscanIcon,
} satisfies Meta<typeof EtherscanIcon>

export default EtherscanMeta

type Story = StoryObj<typeof EtherscanIcon>

export const Etherscan: Story = {
  render: () => (
    <IconWrapper>
      <EtherscanIcon />
    </IconWrapper>
  ),
}
