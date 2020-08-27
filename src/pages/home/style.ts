import styled from 'styled-components';
import { Subtitle, Text, Container, Logo } from '../../shared/styles';

export const HomeSubtitle = styled(Subtitle)`
  margin-top: 30px;
  text-align: center;
`;
export const HomeText = styled(Text)`
  margin-top: 30px;
`;
export const HomeContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70vh;
  padding-top: 200px;
  padding-bottom: 200px;
  border-radius: 5px;
`;
export const HomeLogo = styled(Logo)`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  height: 150px;
  width: 150px;
`;
