import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Search,
  Table,
  Title,
  Button,
  HStack,
  VStack,
  Empty,
  Modal,
} from '../components';

import { useAppState } from '../context/app-context';
import { useSearch } from '../hooks/useSearch';
import { Toaster } from 'react-hot-toast';
import { useModal } from '../hooks/useModal';
import { TCourse } from '../types/types';
import { useState } from 'react';

const Courses = () => {
  const navigate = useNavigate();
  const { stateCourses } = useAppState();
  const { searchTerm, searchOnchange } = useSearch();
  const { courses, setCourses } = stateCourses;
  const { visible, changeVisibility } = useModal();
  const [course, setCourse] = useState<TCourse>();
  const coursesFiltered = courses.filter((course) =>
    course.name.toLocaleLowerCase().includes(searchTerm)
  );

  const goToNewCourseForm = () => {
    navigate('/cursos/nuevo');
  };

  const columns = [
    {
      index: '1',
      name: 'Nombre del curso',
    },
    {
      index: '2',
      name: 'Slug',
    },
    {
      index: '3',
      name: 'Estatus',
    },
    {
      index: '4',
      name: 'Precio',
    },
    {
      index: '5',
      name: 'Duración',
    },
    {
      index: '6',
      name: 'Acciones',
    },
  ];

  const selectCourse = (id: string) => {
    const course = courses.find((course) => course.id === id);
    setCourse(course);
    changeVisibility();
  };

  const deleteCourse = () => {
    const newListCourses = courses.filter((item) => item.id !== course?.id);
    setCourses(newListCourses);
    changeVisibility();
  };

  const updateCourse = () => {
    // console.log(id);
  };

  return (
    <VStack gap='2rem'>
      <Toaster position='top-right' />
      <Search onChange={searchOnchange} searchTerm={searchTerm} />
      <HStack justify='space-between' align='center'>
        <Title>Todos los Cursos ({courses.length})</Title>
        <ActionButtons>
          <Button onClick={goToNewCourseForm} variant='solid'>
            Agregar curso
          </Button>
        </ActionButtons>
      </HStack>
      {courses.length === 0 ? (
        <Empty description='Empieza a agregar tu primer curso.' />
      ) : (
        <Table
          data={coursesFiltered}
          columns={columns}
          selectCourse={selectCourse}
        />
      )}
      <Modal
        visible={visible}
        title='¿Deseas eliminar el curso seleccionado?'
        data={course}
        changeVisibility={changeVisibility}
        deleteCourse={deleteCourse}
      />
    </VStack>
  );
};

export const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2.5rem 0 1.5rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export default Courses;
