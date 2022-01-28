import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

type Props = {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
};

export const TextArea = ({ onChange, value }: Props) => {
  return <StyledTextArea onChange={onChange} value={value}></StyledTextArea>;
};

const StyledTextArea = styled.textarea.attrs((props) => ({
  rows: 8,
}))`
  font: var(--text-text1regular);
  border: none;
  padding: 1rem;
`;
