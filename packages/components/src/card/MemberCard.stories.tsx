import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MembersCard } from './MemberCard'

const MemberCardMeta = {
  title: 'cards/MemberCard',
  component: MembersCard,
  args: {
    title: 'Title',
    subText: 'Subtext',
  },
} satisfies Meta<typeof MembersCard>

export default MemberCardMeta

type Story = StoryObj<typeof MembersCard>

export const MemberCard: Story = {
  render: ({ image, ...rest }) => (
    <div>
      <MembersCard image="/images/cardPlaceholder.png" {...rest} />
    </div>
  ),
}
