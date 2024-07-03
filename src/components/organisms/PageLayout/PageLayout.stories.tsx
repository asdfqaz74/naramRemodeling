import { Meta, StoryObj } from '@storybook/react';
import PageLayout from './PageLayout';
import { MemoryRouter } from 'react-router-dom';
import PageMainImage from 'public/introduction_main.svg';
import ContactUsImage from 'public/ContactUs_Image.svg';
import IntroductionContent from '@/pages/CompanyIntroduction/components/IntroductionContent';

const meta = {
  title: 'PageLayout/organisms',
  component: PageLayout,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
    mainImage: { control: 'radio', options: [PageMainImage, ContactUsImage] },
  },
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const image = {
  src: PageMainImage,
  alt: 'pageMainimage',
};

export const LayoutPage: Story = {
  args: {
    alt: image.alt,
    children: <IntroductionContent />,
    mainImage: image.src,
    firstTitle: 'COMPANY',
    secondTitle: '회사',
    thirdTitle: '고객의 만족은 우리의 기쁨 ',
    thirdSubTitle: '나람사료',
  },
};
