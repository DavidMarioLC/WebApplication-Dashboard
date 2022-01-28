import { Image } from '../atoms/Image';
import styled from 'styled-components';

type TPreview = {
  nameImage: string;
  urlImage: string;
};

type Props = {
  image: TPreview;
};

export const Preview = (props: Props) => {
  const { image } = props;
  if (!image.urlImage) return null;
  return (
    <StyledPreview>
      <Image img={image.urlImage} />
      <NameImage>{image.nameImage}</NameImage>
    </StyledPreview>
  );
};

const StyledPreview = styled.div`
  border: 1px solid var(--primary);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`;

const NameImage = styled.p`
  font: var(--text-text1regular);
`;
