import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar as CalendarIcon } from './calendar'
import { IconWrapper } from './ArrowBack.stories'

const CalendarMeta = {
  title: 'Icons/Calendar',
  component: CalendarIcon,
} satisfies Meta<typeof CalendarIcon>

export default CalendarMeta

type Story = StoryObj<typeof CalendarIcon>

export const Calendar: Story = {
  render: () => (
    <IconWrapper>
      <CalendarIcon />
    </IconWrapper>
  ),
}
