import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '.';
import { TCourse } from '../types/types';

type Props = {
  visible: boolean;
  title?: string;
  data: TCourse | undefined;
  changeVisibility: () => void;
  deleteCourse: () => void;
};

export const Modal = ({
  visible,
  title,
  data,
  changeVisibility,
  deleteCourse,
}: Props) => {
  const portalNode = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {
      document.body.removeChild(portalNode);
    };
  }, [portalNode]);

  return createPortal(
    visible && (
      <StyledOverlay>
        <ModalContent>
          <h2>{title}</h2>
          <ModalDescription>
            <img src={data?.image} alt='' />
            <p>{data?.name}</p>
          </ModalDescription>
          <ModalActions>
            <Button variant='outline' onClick={deleteCourse}>
              Eliminar
            </Button>
            <Button onClick={changeVisibility} variant='solid'>
              Cancelar
            </Button>
          </ModalActions>
        </ModalContent>
      </StyledOverlay>
    ),
    portalNode
  );
};

const StyledOverlay = styled.div`
  padding: 1rem;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 1rem;
  font: var(--heading-heading3);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ModalDescription = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
