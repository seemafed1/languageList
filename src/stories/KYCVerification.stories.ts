import type { Meta, StoryObj } from '@storybook/react';
import KYCVerification from './KYCVerification';

const meta = {
  component: KYCVerification,
  tags: ['autodocs'],
  parameters: {
    layout: '',
  },
  args: {
    
  },
} satisfies Meta<typeof KYCVerification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    // contact : () => alert('contact us')
  },
  
};