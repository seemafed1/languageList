import type { Meta, StoryObj } from '@storybook/react';
import LanguageCardList from './LanguageCardList';
import { LanguageData } from '@/constants/language';

const meta = {
  title: 'Example/LanguageCardList',
  component: LanguageCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  },
} satisfies Meta<typeof LanguageCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    languageData:LanguageData
  },
};
