import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Filter as FilterIcon } from './filter'

const FilterMeta = {
  title: 'Icons/Filter',
  component: FilterIcon,
} satisfies Meta<typeof FilterIcon>

export default FilterMeta

type Story = StoryObj<typeof FilterIcon>

export const Filter: Story = {
  render: () => (
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <FilterIcon />
    </div>
  ),
}
