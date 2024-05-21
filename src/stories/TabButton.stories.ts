import type { Meta, StoryObj } from '@storybook/react';
import TabButton from './TabButton';

const meta = {
  title: 'Example/TabButton',
  component: TabButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  // args: { onClick: action('clicked') },
} satisfies Meta<typeof TabButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    tabArray: [ {label : 'Tab 1'}, {label : 'Tab 2'}, {label : 'Tab 3'}, {label : 'Tab 3'}, {label : 'Tab 3'}, {label : 'Tab 3'} ]
  },
};

