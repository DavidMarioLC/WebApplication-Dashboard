import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../context/app-context';
import { TClase } from '../types/types';
import { fieldsIsEmpty } from '../utils/validateFields';
import {
  Button,
  Input,
  Label,
  TextArea,
  Title,
  FormControl,
  Container,
  Grid,
  GridItem,
  Toast,
} from './index';

const FormClases = () => {
  const { stateClases } = useAppState();
  const navigate = useNavigate();
  const { clases, setClases } = stateClases;
  const [clase, setClase] = useState<TClase>({
    id: '',
    name: '',
    slug: '',
    path: '',
    link: '',
    description: '',
  });

  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClase({
      ...clase,
      [event.target.name]: event.target.value,
    });
  };

  const handlerChangeDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setClase({
      ...clase,
      description: event.target.value,
    });
  };

  const saveClase = () => {
    if (fieldsIsEmpty(name, slug, path, link, description)) {
      toast.custom((t) => (
        <Toast type='error' title='Campos obligatorios'>
          Debes llenar todos los campos
        </Toast>
      ));
      return;
    }

    const uuid = Math.random();

    setClases([
      ...clases,
      {
        ...clase,
        id: uuid.toString(),
      },
    ]);
    resetClaseForm();

    navigate('/clases');
    toast.custom((t) => (
      <Toast type='success' title='Clase agregada'>
        {clase.name} fue agregada correctamente.
      </Toast>
    ));
  };

  const resetClaseForm = () => {
    setClase({
      id: '',
      name: '',
      slug: '',
      path: '',
      link: '',
      description: '',
    });
  };
  const { name, slug, path, link, description } = clase;
  return (
    <>
      <Title>Nueva Clase</Title>
      <Container maxWidth='762px'>
        <Grid gap={32} columns={2}>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Nombre de la clase</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='JavaScript desde cero'
                value={name}
                name='name'
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Slug</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='Desarrollo Web'
                value={slug}
                name='slug'
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Lesson Path</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='Desarrollo Web'
                value={path}
                name='path'
              />
            </FormControl>
          </GridItem>

          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Enlace a Youtube</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='Enlace a youtube'
                value={link}
                name='link'
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={2}>
            <FormControl>
              <Label>Descripci??n </Label>
              <TextArea
                onChange={handlerChangeDescription}
                value={description}
              ></TextArea>
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <Button variant='outline' onClick={resetClaseForm}>
              Cancelar
            </Button>
            <Button variant='solid' onClick={saveClase}>
              Guardar
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default FormClases;
