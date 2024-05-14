import type { Meta, StoryObj } from '@storybook/react';
import Popup from './Popup';
// import { ROLES } from '@constants';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Popup> = {
  component: Popup,
  parameters : {
    layout: 'centered',
    backgrounds: {
      default: 'dark', 
      values: [
        { name: 'light', value: '#ffffff' }, 
        { name: 'dark', value: '#002351' },
      ],
    },
    
  },
  argTypes: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popup>;
export default meta;
type Story = StoryObj<typeof Popup>;
export const Basic: Story = {
  args: {
    id: 1,
    title: 'label',
    children: '',

      buttonFunction:()=> console.log('button pressed'),

    buttonTitle:'click me'
  },
};