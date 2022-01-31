import styled from 'styled-components';
import { Button } from './index';
import { TModule } from '../types/types';

type columnType = {
  index: string;
  name: string;
};

interface ITableProps {
  columns: columnType[];
  data: TModule[];
  selectEditCourse: (id: string) => void;
  selectDeleteCourse: (id: string) => void;
}

export const TableClass = ({
  columns,
  data,
  selectEditCourse,
  selectDeleteCourse,
}: ITableProps) => {
  return (
    <StyledTable>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <HeaderCell key={column.index}>{column.name}</HeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((c) => (
          <TableRow key={c.id}>
            <TableCell>{c.title}</TableCell>
            <TableCell>{c.slug}</TableCell>
            <TableCell>{c.orden}</TableCell>
            <TableCell>
              <Button variant='update' onClick={() => selectEditCourse(c.id)}>
                Update
              </Button>
              <Button variant='delete' onClick={() => selectDeleteCourse(c.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

const StyledTable = styled.div`
  background: var(--white);
`;

const TableHeader = styled.div``;

const HeaderCell = styled.div`
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

const TableBody = styled.div``;

const TableRow = styled.div<{ isSelected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 2rem;
  border-bottom: 1px solid var(--gray3);
  border-left: ${({ isSelected }) =>
    isSelected ? '3px solid var(--primary)' : '3px solid var(--white)'};
`;

const TableCell = styled.div`
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
    /* flex: 0; */
  }
`;

const CoursePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
