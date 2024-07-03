import { Meta, StoryObj } from '@storybook/react';
import NaviButton from './NaviButton';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'GlobalNaviBar/atoms',
  component: NaviButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    route: { control: 'text' },
    isMain: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NaviButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '회사소개',
    route: '/',
    isMain: false,
  },
};
