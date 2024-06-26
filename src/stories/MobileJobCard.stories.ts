import type { Meta, StoryObj } from '@storybook/react';
import MobileJobCard from './MobileJobCard';

const meta = {
  title: 'Example/MobileJobCard',
  component: MobileJobCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  // args: { onClick: action('clicked') },
} satisfies Meta<typeof MobileJobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    brandName: 'Indian Bier House',
    department: 'Executive Chef ',
    city: 'Pune', 
    salary: '70000-90000/M', 
    applicants: '777', 
    jobType: 'Internship', 
    postedDate: new Date(),
    urgentHiring: true,
    saveCard: () => console.log('successfully'),
    shareCard: () => alert('Card is shared'),
    apply: () => alert('Apply successfully'),
    view: () => alert('view detail')
  },
};

