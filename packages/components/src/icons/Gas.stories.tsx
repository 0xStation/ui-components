import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Gas as GasIcon } from './Gas'
import { IconWrapper } from './ArrowBack'

const GasMeta = {
  title: 'Icons/Gas',
  component: GasIcon,
} satisfies Meta<typeof GasIcon>

export default GasMeta

type Story = StoryObj<typeof GasIcon>

export const Gas: Story = {
  render: () => (
    <IconWrapper>
      <GasIcon />
    </IconWrapper>
  ),
}
