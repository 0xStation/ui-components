import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Settings as SettingsIcon } from './settings'
import { IconWrapper } from './ArrowBack.stories'

const SettingsMeta = {
  title: 'Icons/Settings',
  component: SettingsIcon,
} satisfies Meta<typeof SettingsIcon>

export default SettingsMeta

type Story = StoryObj<typeof SettingsIcon>

export const Settings: Story = {
  render: () => (
    <IconWrapper>
      <SettingsIcon />
    </IconWrapper>
  ),
}
