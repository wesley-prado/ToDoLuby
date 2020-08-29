import styled from 'styled-components';
import { Button, Title } from '../../shared/styles';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  height: fit-content;
  width: 35vw;
  min-width: 400px;
  overflow-y: scroll;
  overflow-x: scroll;
  background-color: #eee;
  border-radius: 5px;
  height: 50vh;
  min-height: 200px;
  padding: 15px;
`;
export const SortButton = styled(Button)`
  min-width: 400px;
  margin-bottom: 15px;
  min-width: 400px;
`;
export const ToDoTitle = styled(Title)`
  margin-bottom: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid skyblue;
`;
