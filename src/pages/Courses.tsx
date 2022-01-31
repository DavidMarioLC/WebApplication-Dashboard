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
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalActions,
  ModalTitle,
  ModalText,
  Toast,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  CoursePicture,
} from '../components';

import { useAppState } from '../context/app-context';
import { useSearch } from '../hooks/useSearch';
import { useModal } from '../hooks/useModal';
import { TCourse } from '../types/types';
import toast from 'react-hot-toast';
import Tag from '../components/Tag';

const Courses = () => {
  const navigate = useNavigate();
  const { searchTerm, searchOnchange } = useSearch();
  const { visible, changeVisibility } = useModal();
  const { stateCourses } = useAppState();
  const { courses, setCourses, course, setCourse } = stateCourses;

  const coursesFiltered = courses.filter((course) =>
    course.name.toLocaleLowerCase().includes(searchTerm)
  );

  const selectEditCourse = (id: string) => {
    const course = courses.find((course: TCourse) => course.id === id);
    if (course) {
      setCourse(course);
      goToEditCourseForm();
    }
  };

  const selectDeleteCourse = (id: string) => {
    const course = courses.find((course: TCourse) => course.id === id);
    if (course) {
      setCourse(course);
      changeVisibility();
    }
  };

  const deleteCourse = () => {
    const newListCourses = courses.filter((item) => item.id !== course?.id);
    setCourses(newListCourses);
    changeVisibility();
    toast.custom((t) => (
      <Toast type='success' title='Curso elmininado'>
        El curso ha sido eliminado exitosamente.
      </Toast>
    ));

    setCourse({
      id: '',
      name: '',
      slug: '',
      status: '',
      teacher: '',
      duration: '',
      module: '',
      price: '',
      money: '',
      image: {
        nameImage: '',
        urlImage: '',
      },
      description: '',
    });
  };

  const cancelDeleteCourse = () => {
    changeVisibility();
    setCourse({
      id: '',
      name: '',
      slug: '',
      status: '',
      teacher: '',
      duration: '',
      module: '',
      price: '',
      money: '',
      image: {
        nameImage: '',
        urlImage: '',
      },
      description: '',
    });
  };

  /**
   * redirect and columns
   */
  const goToEditCourseForm = () => {
    navigate('/cursos/edit');
  };

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
      {courses.length === 0 ? (
        <Empty description='Empieza a agregar tu primer curso.' />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHeaderCell key={column.index}>
                  {column.name}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {coursesFiltered.map((course) => (
              <TableRow key={course.id}>
                <TableCell style={{ display: 'flex', gap: '1rem' }}>
                  <CoursePicture src={course.image.urlImage} />
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
                <TableCell>
                  <Button
                    variant='update'
                    onClick={() => selectEditCourse(course.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant='delete'
                    onClick={() => selectDeleteCourse(course.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Modal visible={visible}>
        <ModalContent>
          <ModalTitle>Deseas eliminar el curso seleccionado?</ModalTitle>
          <ModalDescription>
            <ModalImage src={course.image.urlImage} alt='' />
            <ModalText>{course.name}</ModalText>
          </ModalDescription>
          <ModalActions>
            <Button variant='outline' onClick={deleteCourse}>
              Eliminar
            </Button>
            <Button onClick={cancelDeleteCourse} variant='solid'>
              Cancelar
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
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
