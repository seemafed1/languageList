import type { Meta, StoryObj } from '@storybook/react';
import JobCard from './MobileJobCard';

const meta = {
  title: 'Example/JobCard',
  component: JobCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  // args: { onClick: action('clicked') },
} satisfies Meta<typeof JobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    brandName: 'Indian Bier House',
    department: 'Executive Chef ',
    city: 'Pune', 
    salary: '70000-90000/M', 
    applicants: '999', 
    jobType: 'Internship', 
    postedDate: '1 week ago',
    urgentHiring: true,
    save: true,
    saveCard: () => alert('Card is saved'),
    shareCard: () => alert('Card is shared'),
    apply: () => alert('Apply successfully'),
    view: () => alert('view detail')
  },
};

