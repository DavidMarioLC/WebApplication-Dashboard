import { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactChild[];
};

export const FormControl = ({ children }: Props) => {
  return <StyledFormControl>{children}</StyledFormControl>;
};

const StyledFormControl = styled.div`
  //add flex 1
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
