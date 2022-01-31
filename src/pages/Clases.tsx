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
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalText,
  ModalActions,
  Toast,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from '../components';
import { useAppState } from '../context/app-context';
import { TClase } from '../types/types';
import { useModal } from '../hooks/useModal';
import toast from 'react-hot-toast';

const Clases = () => {
  const { searchTerm, searchOnchange } = useSearch();
  const { stateClases } = useAppState();
  const { clases, setClase, clase, setClases } = stateClases;

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

  const cancelDeleteClase = () => {
    changeVisibility();
    setClase({
      id: '',
      name: '',
      slug: '',
      path: '',
      link: '',
      description: '',
    });
  };

  const deleteClase = () => {
    const newlistClases = clases.filter((c) => c.id !== clase.id);
    setClases(newlistClases);
    changeVisibility();
    toast.custom((t) => (
      <Toast type='success' title='Clase eliminada'>
        {clase.name} fue eliminada correctamente.
      </Toast>
    ));
    setClase({
      id: '',
      name: '',
      slug: '',
      path: '',
      link: '',
      description: '',
    });
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
                  <p>{clase.name}</p>
                </TableCell>
                <TableCell>{clase.slug}</TableCell>
                <TableCell>{clase.path}</TableCell>
                <TableCell>
                  <Button
                    variant='update'
                    onClick={() => selectEditClase(clase.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant='delete'
                    onClick={() => selectDeleteClase(clase.id)}
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
            <ModalText>{clase.name}</ModalText>
          </ModalDescription>
          <ModalActions>
            <Button variant='outline' onClick={deleteClase}>
              Eliminar
            </Button>
            <Button onClick={cancelDeleteClase} variant='solid'>
              Cancelar
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Clases;
