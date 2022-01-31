import styled from 'styled-components';

interface ITableProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Table = ({ children }: ITableProps) => {
  return <StyledTable>{children}</StyledTable>;
};

export const StyledTable = styled.div`
  background: var(--white);
`;

export const TableHeader = styled.div``;

export const TableHeaderCell = styled.div`
  flex: 1;
  font: var(--text-text1semibold);
  font-weight: bold;
  &:first-child {
    flex: 2;
  }
  &:nth-child(2) {
    flex: 1;
  }
  &:nth-child(4) {
    /* flex: 0; */
  }
`;

export const TableBody = styled.div``;

export const TableRow = styled.div<{ isSelected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 2rem;
  border-bottom: 1px solid var(--gray3);
  border-left: ${({ isSelected }) =>
    isSelected ? '3px solid var(--primary)' : '3px solid var(--white)'};
`;

export const TableCell = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  font: var(--text-text1semibold);

  &:first-child {
    flex: 2;
  }

  &:nth-child(2) {
    flex: 1;
  }
  &:nth-child(4) {
  }
`;

export const CoursePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
