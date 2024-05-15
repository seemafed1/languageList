import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CV from './CV';
import { awards, educations, experience, languages, references, skills } from '@/constants/create-cv';

const meta = {
  title: 'Example/CV',
  component: CV,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  },
} satisfies Meta<typeof CV>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    skills: skills,
    educations: educations,
    languages: languages,
    awards: awards,
    references: references,
    experience: experience
  },
};
