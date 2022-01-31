import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  visible: boolean;
  children: React.ReactNode | React.ReactNode[];
};

export const Modal = ({ children, visible }: Props) => {
  const portalNode = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {
      document.body.removeChild(portalNode);
    };
  }, [portalNode]);

  return createPortal(
    visible && <StyledOverlay>{children}</StyledOverlay>,
    portalNode
  );
};

export const StyledOverlay = styled.div`
  padding: 1rem;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 1rem;
  font: var(--heading-heading3);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ModalDescription = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const ModalImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const ModalTitle = styled.h2``;

export const ModalText = styled.p``;
