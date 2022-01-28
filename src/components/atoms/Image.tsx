import styled from 'styled-components';

type Props = {
  img?: string;
};

export const Image = ({ img }: Props) => {
  return <StyledImage src={img} />;
};

const StyledImage = styled.img<{ img?: string }>`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
