import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Search as SearchIcon } from './search'
import { IconWrapper } from './ArrowBack'

const SearchMeta = {
  title: 'Icons/Search',
  component: SearchIcon,
} satisfies Meta<typeof SearchIcon>

export default SearchMeta

type Story = StoryObj<typeof SearchIcon>

export const Search: Story = {
  render: () => (
    <IconWrapper>
      <SearchIcon />
    </IconWrapper>
  ),
}
