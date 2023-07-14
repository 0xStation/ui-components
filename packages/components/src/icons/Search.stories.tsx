import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Search as SearchIcon } from './search'

const SearchMeta = {
  title: 'Icons/Search',
  component: SearchIcon,
} satisfies Meta<typeof SearchIcon>

export default SearchMeta

type Story = StoryObj<typeof SearchIcon>

export const Search: Story = {
  render: () => (
    <div className="ui-bg-wet-concrete100 ui-w-20 ui-h-20 ui-border ui-border-slate-400 ui-border-dashed ui-flex ui-items-center ui-justify-center ui-rounded-md">
      <SearchIcon />
    </div>
  ),
}
