import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CV from './CV';
import { awards, educations, experience, languages, references, skills } from '@/constants/create-cv';
import female from '@/constants/face3.avif'
import { WhatsApp } from '@mui/icons-material';

const meta = {
  title: 'Example/CV',
  component: CV,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
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
    experience: experience,
    name: 'Poonam Singh',
    designation: 'Director',
    image: `https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg`,
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet possimus minima nesciunt quod facilis adipisci eum ipsa officiis commodi sunt autem odio repudiandae atque tempore illo nisi, dolore incidunt.',
    portfolio: 'www.portfolio.com',
    newsletter: 'www.newsletter.com',
      phone: '+123-456-7890',
      whatsApp: '+123-456-7890',
      email: 'fed1@gmail.com',
      instagram: 'instagram.com',
      facebook: 'facebook.com',
      linkedin: 'linkedin.com',
      address: 'Phaltan, Satara, ABC 234'
  },
};
