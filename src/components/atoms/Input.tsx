import styled from 'styled-components';

type Props = {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  name?: string;
};

export const Input = (props: Props) => {
  const { placeholder, onChange, value, type, name } = props;
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
    ></StyledInput>
  );
};

const StyledInput = styled.input`
  height: 16px;
  padding: 0.75rem;
  border: none;
  font: var(--text-text1regular);
`;
