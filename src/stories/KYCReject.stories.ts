import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Topbar from './Topbar';
import KYCReject from './KYCReject';

const meta = {
  component: KYCReject,
  tags: ['autodocs'],
  parameters: {
    layout: '',
  },
  args: {
    
  },
} satisfies Meta<typeof KYCReject>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    contact : () => alert('contact us')
  },
  
};