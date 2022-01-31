import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import {
  Search,
  VStack,
  HStack,
  Button,
  Title,
  Empty,
  Table,
  Modal,
} from '../components';
import { useAppState } from '../context/app-context';
import { TClase } from '../types/types';
import { useModal } from '../hooks/useModal';
import { TableClass } from '../components/TableClass';

const Clases = () => {
  const { searchTerm, searchOnchange } = useSearch();
  const { stateClases } = useAppState();
  const { clases, setClase, clase } = stateClases;

  const navigate = useNavigate();
  const { changeVisibility, visible } = useModal();
  const clasesFiltered = clases.filter((clase) =>
    clase.name.toLocaleLowerCase().includes(searchTerm)
  );

  const selectEditClase = (id: string) => {
    const clase = clases.find((clase: TClase) => clase.id === id);
    if (clase) {
      setClase(clase);
      goToEditClaseForm();
    }
  };

  const selectDeleteClase = (id: string) => {
    const clase = clases.find((clase: TClase) => clase.id === id);
    if (clase) {
      setClase(clase);
      changeVisibility();
    }
  };

  const goToEditClaseForm = () => {
    navigate('/clases/edit');
  };

  const goToViewClaseForm = () => {
    navigate('/clases/nuevo');
  };

  const columns = [
    {
      index: '1',
      name: 'Nombre de la clase',
    },
    {
      index: '2',
      name: 'Slug',
    },
    {
      index: '3',
      name: 'Lesson path',
    },
    {
      index: '4',
      name: 'Acciones',
    },
  ];
  return (
    <VStack gap='2rem'>
      <Search searchTerm={searchTerm} onChange={searchOnchange} />
      <HStack justify='space-between' align='center'>
        <Title>Todos las clases ({clases.length})</Title>
        <Button variant='solid' onClick={goToViewClaseForm}>
          Agregar clase
        </Button>
      </HStack>
      {clases.length === 0 ? (
        <Empty description='Empieza a agregar tu primera clase.' />
      ) : (
        <TableClass
          data={clasesFiltered}
          columns={columns}
          selectEditCourse={selectEditClase}
          selectDeleteCourse={selectDeleteClase}
        />
      )}
      <Modal
        visible={visible}
        title='¿Deseas eliminar el curso seleccionado?'
        data={clase}
        cancelDeleteCourse={cancelDeleteCourse}
        deleteCourse={deleteCourse}
      />
    </VStack>
  );
};

export default Clases;
