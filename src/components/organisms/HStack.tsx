import { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
  justify?: string;
  align?: string;
  children: ReactChild | ReactChild[];
};

export const HStack = ({ children, justify, align }: Props) => {
  return (
    <StyledHStack justify={justify} align={align}>
      {children}
    </StyledHStack>
  );
};

const StyledHStack = styled.div<{ justify?: string; align?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
`;
