import type { Meta, StoryObj } from '@storybook/react';
import ScreeningQuetion from './ScreeningQuetion';

const meta = {
  title: 'Example/ScreeningQuetion',
  component: ScreeningQuetion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  // args: { onClick: action('clicked') },
} satisfies Meta<typeof ScreeningQuetion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    saveCard: () => console.log('successfully'),
    shareCard: () => alert('Card is shared'),
    apply: () => alert('Apply successfully'),
    view: () => alert('view detail')
  },
};

