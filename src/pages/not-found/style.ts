import styled from 'styled-components';
import { Container } from '../../shared/styles';

import notFoundImg from './img/error.svg';

export const NotFoundImg = styled.div`
  margin-top: 30px;
  height: 200px;
  width: 200px;
  background-size: cover;
  background-image: url(${notFoundImg});
  background-repeat: no-repeat;
`;
export const NotFoundContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70vh;
  padding-top: 200px;
  padding-bottom: 200px;
  border-radius: 5px;
`;
export const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  height: fit-content;
`;
