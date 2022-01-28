import { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
  columns?: number;
  gap?: number;
  children: ReactChild[];
};

export const Grid = (props: Props) => {
  const { children, columns, gap } = props;

  return (
    <StyledGrid columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
};

const StyledGrid = styled.div<{ gap?: number; columns?: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns},1fr)`};
  gap: ${({ gap }) => (gap ? `${gap}px` : '')};
  padding: 0.5rem;
`;
