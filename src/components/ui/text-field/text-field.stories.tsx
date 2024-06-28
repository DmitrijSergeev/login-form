import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from 'src/components/ui/text-field/index.ts'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
