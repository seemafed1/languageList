import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { LanguageData } from '@/constants/language';
import JobCard from './JobCard';

const meta = {
  title: 'Example/JobCard',
  component: JobCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof JobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    city: 'Pune', 
    salary: '70000-90000/M', 
    applicants: '999', 
    jobType: 'Internship', 
    postedDate: '1 week ago',
    urgentHiring: true
  },
};
