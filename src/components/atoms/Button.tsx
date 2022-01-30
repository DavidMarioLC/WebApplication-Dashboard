import { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
  onClick?: (e: any) => void;
  children: ReactChild | ReactChild[];
  variant?: string;
};

export const Button = (props: Props) => {
  const { variant, children, onClick } = props;
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

const ButtonDefault = styled.button`
  border: none;
  background: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font: var(--text-text1semibold);
  transition: ease-out 0.1s;
  cursor: pointer;

  &:active {
    transform: scale(0.96);
  }
`;

const StyledButton = styled(ButtonDefault)<{ variant?: string }>`
  box-shadow: ${({ variant }) =>
    variant === 'outline' ? `inset 0px 0px 1px 2px var(--black)` : ``};
  color: ${({ variant }) =>
    variant === 'outline'
      ? `var(--black)`
      : variant === 'solid'
      ? `var(--white)`
      : variant === 'disabled'
      ? `var(--white)`
      : variant === 'delete'
      ? `var(--white)`
      : variant === 'update'
      ? 'var(--white)'
      : ''};
  background: ${({ variant }) =>
    variant === 'solid'
      ? ' var(--black)'
      : variant === 'disabled'
      ? 'var(--gray3)'
      : variant === 'delete'
      ? 'var(--red)'
      : variant === 'update'
      ? 'var(--primary)'
      : ''};

  cursor: ${({ variant }) => (variant === 'disabled' ? `not-allowed` : '')};
  &:active {
    transform: ${({ variant }) =>
      variant === 'disabled' ? `scale(1)` : `scale(0.96)`};
  }
`;
