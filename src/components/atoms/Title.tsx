import { ReactChild } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactChild | ReactChild[];
}

export const Title = (props: Props) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

const StyledTitle = styled.h1`
  font: var(--heading-heading1);
  color: var(--black);
`;
