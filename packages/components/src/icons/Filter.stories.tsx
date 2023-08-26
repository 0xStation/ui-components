import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Filter as FilterIcon } from './filter'
import { IconWrapper } from './arrowBack'

const FilterMeta = {
  title: 'Icons/Filter',
  component: FilterIcon,
} satisfies Meta<typeof FilterIcon>

export default FilterMeta

type Story = StoryObj<typeof FilterIcon>

export const Filter: Story = {
  render: () => (
    <IconWrapper>
      <FilterIcon />
    </IconWrapper>
  ),
}
