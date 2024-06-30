import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../../components/ui/button/button'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
