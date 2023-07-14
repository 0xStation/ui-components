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
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <FilterIcon />
    </div>
  ),
}
