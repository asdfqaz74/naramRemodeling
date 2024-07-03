import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MainBoxLink from './MainBoxLink';

const meta = {
  title: 'MainPageBox/atoms/link',
  component: MainBoxLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { path: { control: 'radio', options: ['/CS', '/path', '/product', '/recruit'] } },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MainBoxLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    path: '/CS',
    color: 'black',
    isBox: true,
  },
};
