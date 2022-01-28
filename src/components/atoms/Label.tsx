import { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactChild;
};

export const Label = ({ children }: Props) => {
  return <StyledLabel>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  font: var(--text-text2medium);
  color: var(--black);
`;
