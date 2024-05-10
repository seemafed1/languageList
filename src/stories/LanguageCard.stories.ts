import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LanguageCard from './LanguageCard';
import { LanguageData } from '@/constants/language';

const meta = {
  title: 'Example/LanguageCard',
  component: LanguageCard,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof LanguageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: LanguageData[0],
};
