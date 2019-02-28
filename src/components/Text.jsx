import styled from 'styled-components/macro';
// import { device } from '../utils/device';

const defaultSize = 0.9;
const increments = {
  default: 0.4,
  laptop: 0.3,
  tablet: 0.35,
  mobile: 0.3,
};

const setColor = ({ theme, dark }) => {
  const { color } = theme;
  dark = dark || false;

  return dark ? color.dark : color.white;
};

const setWeight = ({ bold }) => {
  bold = bold || false;

  return bold ? '700' : '300';
};

const setFontSize = ({ size = 1 }, increment) => {
  return `${defaultSize + increment * (size - 1)}em`;
};

const setAlign = ({ align = 'inherit' }) => {
  return align;
};

const setFontFamily = ({ font }) => {
  return font === 'secondary'
    ? `'Playfair Display', 'Lato', sans-serif`
    : 'Raleway';
};

export const withTextStyle = component => styled(component)`
  font-family: ${setFontFamily};
  line-height: ${({ lineHeight }) => lineHeight || '1.2em'};
  color: ${setColor};
  font-size: ${props => setFontSize(props, increments.default)};
  font-weight: ${setWeight};
  text-align: ${setAlign};
  text-decoration: none;

  ${({ italic }) => italic && 'font-style: italic;'}
`;

const Text = withTextStyle('div');

export const Header = withTextStyle('h1');

export default Text;
