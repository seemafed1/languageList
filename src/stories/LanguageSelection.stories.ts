import type { Meta, StoryObj } from '@storybook/react';
import LanguageSelection from './LanguageSelection';
import { LanguageData } from '@/constants/language';

const meta = {
  title: 'Example/LanguageSelection',
  component: LanguageSelection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  // args: { onClick: action('clicked') },
} satisfies Meta<typeof LanguageSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    languageData:LanguageData
  },
};

