import styled from 'styled-components';
import { Box } from '@rebass/grid';

const CommonContainer = styled(Box).attrs({
  px: 4,
  w: 1,
  mx: 'auto',
})`
  box-sizing: content-box;
  max-width: 1300px;
`;

export default CommonContainer;
