import styled from 'styled-components/macro';
// import { device } from '../utils/device';

const defaultSize = 1;
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

const setFontSize = ({ size }, increment) => {
  size = size || 1;

  return `${defaultSize + increment * (size - 1)}em`;
};

const setAlign = ({ align }) => {
  return align || 'inherit';
};

export const withTextStyle = (component) => styled(component)`
  font-family: 'Playfair Display', 'Lato', sans-serif;
  line-height: ${({ lineHeight }) => lineHeight || '1.2em'};
  color: ${setColor};
  font-size: ${props => setFontSize(props, increments.default)};
  font-weight: ${setWeight};
  text-align: ${setAlign};

  ${({italic}) => italic && 'font-style: italic;'}
`;

const Text = withTextStyle('div');

export const Header = styled(withTextStyle('h1'))`
  line-height: ${({ lineHeight }) => lineHeight || '1.2em'};
`;

export default Text;
