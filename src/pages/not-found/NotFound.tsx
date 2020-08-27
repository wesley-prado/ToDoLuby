import React from 'react';
import { Title } from '../../shared/styles';
import { NotFoundImg, MsgContainer, NotFoundContainer } from './style';
const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <MsgContainer>
        <Title>Page not found!</Title>
        <NotFoundImg />
      </MsgContainer>
    </NotFoundContainer>
  );
};

export default NotFound;
