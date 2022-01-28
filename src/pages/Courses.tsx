import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Search, Table, Title, Button, HStack, VStack } from '../components';
import { useAppState } from '../context/app-context';
import { useSearch } from '../hooks/useSearch';

const Courses = () => {
  const navigate = useNavigate();
  const { stateCourses } = useAppState();
  const { searchTerm, searchOnchange } = useSearch();
  const { courses } = stateCourses;

  const coursesFiltered = courses.filter((course) =>
    course.name.toLocaleLowerCase().includes(searchTerm)
  );

  const goToNewCourseForm = () => {
    navigate('/cursos/nuevo');
  };

  return (
    <VStack gap='2rem'>
      <Search onChange={searchOnchange} searchTerm={searchTerm} />
      <HStack justify='space-between' align='center'>
        <Title>Todos los Cursos ({courses.length})</Title>
        <ActionButtons>
          <Button onClick={goToNewCourseForm} variant='solid'>
            Agregar curso
          </Button>
        </ActionButtons>
      </HStack>
      <Table courses={coursesFiltered} />
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
