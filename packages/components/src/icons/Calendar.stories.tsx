import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar as CalendarIcon } from './calendar'

const CalendarMeta = {
  title: 'Icons/Calendar',
  component: CalendarIcon,
} satisfies Meta<typeof CalendarIcon>

export default CalendarMeta

type Story = StoryObj<typeof CalendarIcon>

export const Calendar: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <CalendarIcon />
    </div>
  ),
}
