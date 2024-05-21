import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Topbar from './Topbar';
// import { Back, PrimaryLogo } from '@assets/icons';
import back from './assets/webImages/backIcons.png'
import PrimaryLogo from './assets/webImages/horecah wt 1.png'

const meta = {
  component: Topbar,
  tags: ['autodocs'],
  parameters: {
    layout: '',
  },
  args: {
    
  },
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    label: "Label",
    backgroundColor: "#113B73",
    color: "white",
    button: back,
    logo: PrimaryLogo,
    // logoHeight: 50,
    progress: '30%',
    onBack: action('Back button clicked')
  },
  
};