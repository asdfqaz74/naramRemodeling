import { Meta, StoryObj } from '@storybook/react';
import KakaoMap from './KakaoMap';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'KakaoMap/atoms',
  component: KakaoMap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof KakaoMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutPage: Story = {
  args: {
    width: '100px',
    level: 5,
    firstContent: '내용',
    secondContent: '내용2',
  },
};
