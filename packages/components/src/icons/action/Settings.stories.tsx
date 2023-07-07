import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Settings as SettingsIcon } from './Settings'

const SettingsMeta = {
  title: 'Icons/Actions/Settings',
  component: SettingsIcon,
} satisfies Meta<typeof SettingsIcon>

export default SettingsMeta

type Story = StoryObj<typeof SettingsIcon>

export const Settings: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <SettingsIcon />
    </div>
  ),
}
