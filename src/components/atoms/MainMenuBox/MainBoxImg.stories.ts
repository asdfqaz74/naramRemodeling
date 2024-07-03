import { Meta, StoryObj } from '@storybook/react';
import MainBoxImg from './MainBoxImg';
import CS from '/cs.png';
import path from '/path.png';
import product from '/product.png';
import recruit from '/recruit.png';

const meta = {
  title: 'MainPageBox/atoms/img',
  component: MainBoxImg,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { img: { control: 'radio', options: [CS, path, product, recruit] } },
} satisfies Meta<typeof MainBoxImg>;

export default meta;
type Story = StoryObj<typeof meta>;

const IMAGE = [
  {
    src: CS,
    alt: '고객센터',
  },
  {
    src: path,
    alt: '오시는길',
  },
  {
    src: product,
    alt: '제품정보',
  },
  {
    src: recruit,
    alt: '인재채용',
  },
];

export const Cs: Story = {
  args: {
    img: IMAGE[0].src,
    alt: IMAGE[0].alt,
  },
};

export const Path: Story = {
  args: {
    img: IMAGE[1].src,
    alt: IMAGE[1].alt,
  },
};
