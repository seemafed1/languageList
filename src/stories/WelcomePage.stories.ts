import type { Meta, StoryObj } from '@storybook/react';
import WelcomePage from './WelcomePage';

const meta = {
  component: WelcomePage,
  tags: ['autodocs'],
  parameters: {
    layout: '',
  },
  args: {
    
  },
} satisfies Meta<typeof WelcomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    // contact : () => alert('contact us')
  },
  
};