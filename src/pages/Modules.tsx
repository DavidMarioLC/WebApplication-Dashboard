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
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Modal,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalText,
  ModalActions,
  Toast,
} from '../components';
import { useAppState } from '../context/app-context';
import { useModal } from '../hooks/useModal';
import { TModule } from '../types/types';
import toast from 'react-hot-toast';
const Module = () => {
  const { searchTerm, searchOnchange } = useSearch();
  const { stateModules } = useAppState();
  const { modules, setModules, module, setModule } = stateModules;

  const navigate = useNavigate();
  const { changeVisibility, visible } = useModal();
  const clasesFiltered = modules.filter((module) =>
    module.title.toLocaleLowerCase().includes(searchTerm)
  );

  const selectEditModule = (id: string) => {
    const module = modules.find((module: TModule) => module.id === id);
    if (module) {
      setModule(module);
      goToEditClaseForm();
    }
  };

  const selectDeleteModule = (id: string) => {
    const module = modules.find((module: TModule) => module.id === id);
    if (module) {
      setModule(module);
      changeVisibility();
    }
  };

  const deleteModule = () => {
    const newListCourses = modules.filter((item) => item.id !== module?.id);
    setModules(newListCourses);
    changeVisibility();
    toast.custom((t) => (
      <Toast type='success' title='Modulo elmininado'>
        El modulo ha sido eliminado exitosamente.
      </Toast>
    ));

    setModule({
      id: '',
      title: '',
      slug: '',
      mod: '',
      orden: '',
    });
  };

  const cancelDeleteModule = () => {
    changeVisibility();
    setModule({
      id: '',
      title: '',
      slug: '',
      mod: '',
      orden: '',
    });
  };

  const goToViewModuleForm = () => {
    navigate('/modulos/nuevo');
  };

  const goToEditClaseForm = () => {
    navigate('/modulos/edit');
  };

  const columns = [
    {
      index: '1',
      name: 'Nombre del titulo',
    },
    {
      index: '2',
      name: 'Slug',
    },
    {
      index: '3',
      name: 'Orden',
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
        <Title>Todos los Modulos ({modules.length})</Title>
        <Button variant='solid' onClick={goToViewModuleForm}>
          Agregar modulo
        </Button>
      </HStack>
      {modules.length === 0 ? (
        <Empty description='Empieza a agregar tu primer modulo.' />
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
            {clasesFiltered.map((clase) => (
              <TableRow key={clase.id}>
                <TableCell>
                  <p>{clase.title}</p>
                </TableCell>
                <TableCell>{clase.slug}</TableCell>
                <TableCell>{clase.orden}</TableCell>
                <TableCell>
                  <Button
                    variant='update'
                    onClick={() => selectEditModule(clase.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant='delete'
                    onClick={() => selectDeleteModule(clase.id)}
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
          <ModalTitle>Deseas eliminar la clase seleccionada?</ModalTitle>
          <ModalDescription>
            <ModalText>{module.title}</ModalText>
          </ModalDescription>
          <ModalActions>
            <Button variant='outline' onClick={deleteModule}>
              Eliminar
            </Button>
            <Button onClick={cancelDeleteModule} variant='solid'>
              Cancelar
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Module;
