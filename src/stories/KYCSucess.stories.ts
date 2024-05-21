import type { Meta, StoryObj } from '@storybook/react';
import KYCSucess from './KYCSucess';

const meta = {
  component: KYCSucess,
  tags: ['autodocs'],
  parameters: {
    layout: '',
  },
  args: {
    
  },
} satisfies Meta<typeof KYCSucess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    // contact : () => alert('contact us')
  },
  
};