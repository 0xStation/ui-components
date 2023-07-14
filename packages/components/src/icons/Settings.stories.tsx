import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Settings as SettingsIcon } from './settings'

const SettingsMeta = {
  title: 'Icons/Settings',
  component: SettingsIcon,
} satisfies Meta<typeof SettingsIcon>

export default SettingsMeta

type Story = StoryObj<typeof SettingsIcon>

export const Settings: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <SettingsIcon />
    </div>
  ),
}
