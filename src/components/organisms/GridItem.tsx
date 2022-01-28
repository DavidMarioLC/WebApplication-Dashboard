import { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
  fillColumn?: number;

  children: ReactChild | ReactChild[];
};

export const GridItem = (props: Props) => {
  const { fillColumn, children } = props;
  return <StyledGridItem fillColumn={fillColumn}>{children}</StyledGridItem>;
};

const StyledGridItem = styled.div<{ fillColumn?: number }>`
  grid-column: ${({ fillColumn }) =>
    fillColumn ? `span ${fillColumn}/span ${fillColumn}` : ``};
  display: flex;
  gap: 1rem;

  align-items: center;
`;
