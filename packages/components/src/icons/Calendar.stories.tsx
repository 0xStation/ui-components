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
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <CalendarIcon />
    </div>
  ),
}
