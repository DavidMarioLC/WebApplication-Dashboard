import { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
  gap?: string;
  children: ReactChild | ReactChild[];
};

export const VStack = ({ children, gap }: Props) => {
  return <StyledVStack gap={gap}>{children}</StyledVStack>;
};

const StyledVStack = styled.div<{ gap?: string }>`
  display: grid;
  gap: ${({ gap }) => (gap ? gap : '')};
`;
