import React from 'react';
import styled from 'styled-components';

type Props = {
  description: string;
};

export const Empty = ({ description }: Props) => {
  return (
    <StyledEmpty>
      <EmptyImage src={process.env.PUBLIC_URL + 'empty.svg'} />
      <EmptyDescription>
        <EmptyTitle>Empezar!</EmptyTitle>
        <EmptyParagraph>{description}</EmptyParagraph>
      </EmptyDescription>
    </StyledEmpty>
  );
};

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 300px);
`;

const EmptyImage = styled.img``;

const EmptyDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;
const EmptyTitle = styled.h2`
  font: var(--heading-heading2);
`;

const EmptyParagraph = styled.p`
  font: var(--text-text1regular);
`;
