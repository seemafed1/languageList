import type { Meta, StoryObj } from '@storybook/react';
import horecahWT from './assets/webImages/horecah wt 1.png'
import { DesktopNavbar } from './DesktopNavbar';

const meta = {
  component: DesktopNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    
  },
} satisfies Meta<typeof DesktopNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  parameters: {
    nextjs: {
      router: {
        pathname: '/learning',
      },
    },
  },
  args: {
    logo: horecahWT,
    primary: true,
    rightNavItems : [
    {
      id: 1,
      type: "link",
      title: "Hire",
      path: '/hire'
    },
    {
      id: 2,
      type: "link",
      title: "Become Supplier",
      path: '/supplier'
    },
    {
      id: 3,
      type: "link",
      title: "Job / Internship",
      path: '/job'
    },
    {
      id: 4,
      type: "link",
      title: "Job / Internship",
      path: '/job'
    }
  ],
    leftNavItems: [
    {
      id: 1,
      type: "dropdown",
      title: "Jobs",
      path: 'jobs',
      links: [
        {
            id: 1,
            type: "link",
            title: "Search Jobs",
            path: "/search-jobs"
        },
        {
            id: 2,
            type: "link",
            path: "/manage-jobs",
            title: "Manage Jobs",
        }
      ]
    },
    {
      id: 2,
      type: "link",
      title: "Learning",
      path: '/learning'
    }
  ],
  },
};

export const secondary: Story = {
  args: {
    logo: horecahWT,
    primary: false,
    rightNavItems : [
    {
      id: 1,
      type: "link",
      title: "Hire",
      path: '/hire'
    },
    {
      id: 2,
      type: "link",
      title: "Become Supplier",
      path: '/supplier'
    },
    {
      id: 3,
      type: "link",
      title: "Job / Internship",
      path: '/job'
    }
  ],
    leftNavItems: [
    {
      id: 1,
      type: "dropdown",
      title: "Jobs",
      path: 'jobs',
      links: [
        {
            id: 1,
            type: "link",
            title: "Search Jobs",
            path: "/search-jobs",
        },
        {
            id: 2,
            type: "link",
            title: "Manage Jobs",
            path: "/manage-jobs",
        }
      ]
    },
    {
      id: 2,
      type: "link",
      title: "Learning",
      path: '/learning'
    }
  ],
  },
};