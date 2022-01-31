import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../context/app-context';
import { TModule } from '../types/types';
import {
  Button,
  Input,
  Label,
  Title,
  FormControl,
  Container,
  Grid,
  GridItem,
} from './index';

const FormModules = () => {
  const { stateModules } = useAppState();
  const navigate = useNavigate();
  const { modules, setModules } = stateModules;
  const [module, setModule] = useState<TModule>({
    id: '',
    title: '',
    slug: '',
    mod: '',
    orden: '',
  });

  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModule({
      ...module,
      [event.target.name]: event.target.value,
    });
  };

  const saveModule = () => {
    setModules([...modules, module]);
    resetModuleForm();
    navigate('/modulos');
  };

  const resetModuleForm = () => {
    setModule({
      id: '',
      title: '',
      slug: '',
      mod: '',
      orden: '',
    });
  };

  const { title, slug, mod, orden } = module;
  return (
    <>
      <Title>Nuevo Modulo</Title>
      <Container maxWidth='762px'>
        <Grid gap={32} columns={2}>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Titulo</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='Bienvenida'
                value={title}
                name='title'
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Slug</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='bienvenida'
                value={slug}
                name='slug'
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Modulo</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='curso-flexbox'
                value={mod}
                name='mod'
              />
            </FormControl>
          </GridItem>

          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Orden</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='2'
                value={orden}
                name='orden'
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <Button variant='outline' onClick={resetModuleForm}>
              Cancelar
            </Button>
            <Button variant='solid' onClick={saveModule}>
              Guardar
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default FormModules;
