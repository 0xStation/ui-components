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
    <div className="bg-wet-concrete100 w-20 h-20 border border-slate-400 border-dashed flex items-center justify-center rounded-md">
      <SearchIcon />
    </div>
  ),
}
