import styled from 'styled-components';
import { withTextStyle } from './Text';

const Button = styled(withTextStyle('button'))`
  border: 1px solid ${({ theme }) => theme.color.black};
  background: white;
`;

export default Button;
