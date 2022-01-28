import styled from 'styled-components';

const Tag = ({ text, type }: { text: number | string; type: string }) => {
  return <StyledTag type={type}>{text}</StyledTag>;
};

const getBackground = (type: string) => {
  interface Icolor {
    [key: string]: string;
  }

  const color: Icolor = {
    draft: '--gray',
    review: '--orange',
    uploading: ' --blue',
    published: ' --green',
    free: '--linear2',
    price: '--purple10',
  };

  return color[type] || color['draft'];
};

const StyledTag = styled.div<{ type: string }>`
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 40px;
  background: ${({ type }) => `var(${getBackground(type)})`};
  color: var(--white);
  &:first-letter {
    text-transform: capitalize;
  }
`;

export default Tag;
