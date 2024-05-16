import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Popup from './Popup';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Example/Popup',
  component: Popup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  // args: { onClick: action('clicked') },
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    title : 'Are You Sure ?',
    childTitle : 'You can edit your popup box later You can edit your popup box later.',
    confirm: () => {
      alert('Are you confirm')
    } 
  },
};
