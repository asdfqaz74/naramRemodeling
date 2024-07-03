import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MainBox from './MainBox';
import CS from '/cs.png';
import path from '/path.png';
import product from '/product.png';
import recruit from '/recruit.png';

const ITEMS = [
  {
    src: CS,
    alt: '고객센터',
    path: '/CS',
  },
  {
    src: path,
    alt: '오시는길',
    path: '/path',
  },
  {
    src: product,
    alt: '제품정보',
    path: '/product',
  },
  {
    src: recruit,
    alt: '인재채용',
    path: '/recruit',
  },
];

const meta = {
  title: 'MainPageBox/molcules/box',
  component: MainBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    img: { control: 'radio', options: [ITEMS[0].src, ITEMS[1].src, ITEMS[2].src, ITEMS[3].src] },
    alt: { control: 'radio', options: [ITEMS[0].alt, ITEMS[1].alt, ITEMS[2].alt, ITEMS[3].alt] },
    path: { control: 'radio', options: [ITEMS[0].path, ITEMS[1].path, ITEMS[2].path, ITEMS[3].path] },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MainBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    img: ITEMS[0].src,
    alt: ITEMS[0].alt,
    path: ITEMS[0].path,
  },
};
