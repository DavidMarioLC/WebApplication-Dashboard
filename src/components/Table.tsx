import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { TCourse } from '../types/types';

import Tag from './Tag';

interface ITableProps {
  courses: TCourse[];
  onChangeSelect?: (e: ChangeEvent<HTMLInputElement>, course: TCourse) => void;
}

export const Table = ({ courses, onChangeSelect }: ITableProps) => {
  return (
    <StyledTable>
      <TableHeader>
        <TableRow>
          <HeaderCell>
            <TableCheckbox type='checkbox' />
          </HeaderCell>
          <HeaderCell>Nombre del curso</HeaderCell>
          <HeaderCell>Slug</HeaderCell>
          <HeaderCell>Estatus</HeaderCell>
          <HeaderCell>Precio</HeaderCell>
          <HeaderCell>Duración</HeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell>
              <TableCheckbox
                // onChange={(event) => onChangeSelect(event, course)}
                type='checkbox'
              />
            </TableCell>
            <TableCell style={{ display: 'flex', gap: '1rem' }}>
              <CoursePicture src={course.image} />
              <p>{course.name}</p>
            </TableCell>
            <TableCell>{course.slug}</TableCell>
            <TableCell>
              <Tag
                text={course.status}
                type={course.status.toLocaleLowerCase()}
              />
            </TableCell>

            <TableCell>
              <Tag text={`${course.price} ${course.money}`} type='price' />
            </TableCell>
            <TableCell>{course.duration}</TableCell>
          </TableRow>
        ))}
        {/* TEST */}
        {/* <TableRow isSelected={false}>
            <TableCell>
              <TableCheckbox type='checkbox' />
            </TableCell>
            <TableCell>Logo + Curso de introducción al desarrollo web</TableCell>
            <TableCell>desarrollo-web</TableCell>
            <TableCell>
              <Tag text='published' type='published' />
            </TableCell>
            <TableCell>
              <Tag text='50 USD' type='price' />
            </TableCell>
            <TableCell>Duración</TableCell>
          </TableRow> */}
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
    flex: 0;
  }
  &:nth-child(2) {
    flex: 2;
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
  gap: 1rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--gray3);
  border-left: ${({ isSelected }) =>
    isSelected ? '3px solid var(--primary)' : '3px solid var(--white)'};
`;

const TableCell = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font: var(--text-text1semibold);

  &:first-child {
    flex: 0;
  }

  &:nth-child(2) {
    flex: 2;
  }
  &:nth-child(4) {
    /* flex: 0; */
  }
`;

const TableCheckbox = styled.input`
  height: 1.125rem;
  width: 1.125rem;
`;

const CoursePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
