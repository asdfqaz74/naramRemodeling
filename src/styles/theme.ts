const colors = {
  Gray100: '#F6F6F6',
  Primary: '#3974CC',
  Red: '#F44646',
  TextDarkGray: '#868686',
  Orange: '#FFB62B',
  Gray300: '#D1D1D1',
  TextBlack: '#333333',
  White: '#FFFFFF',
  Gray200: '#D9D9D9',
  GrayFill: '#E7E7E7',
  LineGray: '#D1D1D1',
};
const fontSizes = {
  /* Text-size styles */
  /* base size: text-base-regular (16px) */
  headingLarge: '3.75rem',
  headingMedium: '2.5rem',
  spacing: '1.62rem',
  large: '1.5rem',
  medium: '1.25rem',
  Smedium: '1.125rem',
  base: '1rem',
  smallRegular: '0.88rem',
  Mbase: '0.75rem',
  Msmall: '0.62rem',
};
const fontWeights = {
  bold: '900',
  semibold: '700',
  medium: '500',
  regular: '300',
};
const fontStyles = {
  headingLarge: `
    font-size:${fontSizes.headingLarge};
    font-weight:${fontWeights.bold};
  `,
  headingMedium: `
    font-size:${fontSizes.headingMedium};
    font-weight:${fontWeights.bold};
  `,
  headingMobile: `
    font-size:${fontSizes.large};
    font-weight:${fontWeights.bold};
  `,
  textSpacing: `
    font-size:${fontSizes.spacing};
    font-weight:${fontWeights.regular};
    letter-spacing:7px;
  `,
  textInput: `
    font-size:${fontSizes.Smedium};
    font-weight:${fontWeights.regular};
  `,
  textBase: `
    font-size:${fontSizes.base};
    font-weight:${fontWeights.regular};
  `,
  mobileBase: `
    font-size:${fontSizes.Mbase};
    font-weight:${fontWeights.regular};
  `,
  mobilesmall: `
    font-size:${fontSizes.Msmall};
    font-weight:${fontWeights.regular};
  `,
};
const theme = {
  colors,
  fontSizes,
  fontWeights,
  fontStyles,
};

export default theme;
export type ThemeType = typeof theme;
