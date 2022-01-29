import styled from 'styled-components';

type Props = {
  type: string;
  title?: string;
  children?: React.ReactNode;
};

export const Toast = ({ type, title, children }: Props) => {
  return (
    <StyledToast type={type}>
      <ToastContent type={type}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>
          <Strong> {children}</Strong>
        </ToastDescription>
      </ToastContent>
    </StyledToast>
  );
};

const StyledToast = styled.div<{ type: string }>`
  background: var(--white);
  border: ${({ type }) =>
    type === 'success' ? '1px solid var(--green)' : '1px solid var(--red)'};
  border-radius: 4px;
  max-width: 356px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 3px 5px rgba(0, 0, 0, 0.2);
`;

const ToastContent = styled.div<{ type: string }>`
  padding: 1rem;
  box-shadow: ${({ type }) =>
    type === 'success'
      ? 'inset 8px 0px 0px 0px var(--greenOpacity)'
      : 'inset 8px 0px 0px 0px var(--redOpacity)'};
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

const ToastTitle = styled.strong`
  color: #373737;
  font: var(--text-text1semibold);
`;

const ToastDescription = styled.p`
  color: var(--gray);
  font: var(--text-text2regular);
`;

const Strong = styled.strong`
  font-weight: bold;
`;
