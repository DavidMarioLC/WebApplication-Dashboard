import { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactChild | ReactChild[];
  maxWidth?: string;
};

export const Container = (props: Props) => {
  const { children, maxWidth } = props;
  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
};

const StyledContainer = styled.div<{ maxWidth?: string }>`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  overflow: auto;
`;
