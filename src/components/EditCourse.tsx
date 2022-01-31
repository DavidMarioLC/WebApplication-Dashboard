import {
  Title,
  Input,
  Label,
  Button,
  TextArea,
  Select,
  FormControl,
  Preview,
  Grid,
  GridItem,
  Container,
  Toast,
} from './index';

import { useAppState } from '../context/app-context';
import { useNavigate } from 'react-router-dom';
import { TCourse } from '../types/types';
import toast, { Toaster } from 'react-hot-toast';
import { usePreview } from '../hooks/usePreview';

const EditCourse = () => {
  const navigate = useNavigate();
  const { stateCourses } = useAppState();
  const { setCourses, courses, course, setCourse } = stateCourses;
  const {
    name,
    slug,
    duration,
    module,
    price,
    description,
    status,
    teacher,
    image,
  } = course;
  const { previewImage, fileRef, handleOnclickUpload, handlerChangeFile } =
    usePreview(image);

  const saveCourse = () => {
    if ([name, slug, duration, module, price, description].includes('')) {
      toast.custom((t) => (
        <Toast type='error' title='Campos obligatorios'>
          Debes llenar todos los campos
        </Toast>
      ));
      return;
    }

    const newListCourse: TCourse[] = courses.map((c) => {
      if (c.id === course.id) {
        return {
          ...course,
          image: {
            nameImage: previewImage.nameImage,
            urlImage: previewImage.urlImage,
          },
        };
      }
      return c;
    });

    setCourses(newListCourse);

    toast.custom((t) => (
      <Toast type='success' title='Curso Actualizado'>
        {course.name} fue actualizado correctamente.
      </Toast>
    ));
    navigate('/cursos');
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

  const cancelSave = () => {
    navigate('/cursos');
  };

  const teacherOptions = [
    { label: 'Leonidas Esteban', value: 'leonidas' },
    { label: 'Mike Nieva', value: 'mike' },
    { label: 'Fabian Gutierrez', value: 'fabian' },
    { label: 'Cristopher', value: 'cris' },
  ];

  const statusOptions = [
    { label: 'Draft', value: 'Draft' },
    { label: 'Review', value: 'Review' },
    { label: 'Uploading', value: 'Uploading' },
    { label: 'Published', value: 'Published' },
  ];

  const moneyOptions = [
    { label: 'USD', value: 'USD' },
    { label: 'SOL', value: 'SOL' },
    { label: 'MXN', value: 'MXN' },
    { label: 'EUR', value: 'EUR' },
  ];

  const handlerChangeTeacher = (option: string) => {
    setCourse({
      ...course,
      teacher: option,
    });
  };

  const handlerChangeChangeStatus = (option: string) => {
    setCourse({
      ...course,
      status: option,
    });
  };

  const handlerChangeMoney = (option: string) => {
    setCourse({
      ...course,
      money: option,
    });
  };

  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handlerChangeDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCourse({
      ...course,
      description: event.target.value,
    });
  };
  return (
    <>
      <Title>Editando Curso</Title>
      <Container maxWidth='762px'>
        <Grid gap={32} columns={2}>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Nombre del curso</Label>
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
              <Label>Estatus</Label>
              <Select
                defaultSelect={status}
                options={statusOptions}
                handlerChangeOption={handlerChangeChangeStatus}
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Profesor</Label>
              <Select
                defaultSelect={teacher}
                options={teacherOptions}
                handlerChangeOption={handlerChangeTeacher}
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Duración en horas</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='Duración en horas'
                value={duration}
                name='duration'
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Modulo</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='Modulo'
                value={module}
                name='module'
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Precio</Label>
              <Input
                onChange={handlerChangeInput}
                type='text'
                placeholder='Precio'
                value={price}
                name='price'
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Código de moneda</Label>
              <Select
                defaultSelect='Selecciona la moneda'
                options={moneyOptions}
                handlerChangeOption={handlerChangeMoney}
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={2}>
            <Button variant='outline' onClick={handleOnclickUpload}>
              Agregar Imagen
            </Button>
            <Preview image={previewImage || image} />
            <input
              onChange={handlerChangeFile}
              ref={fileRef}
              type='file'
              accept='image/*'
              hidden
            />
          </GridItem>
          <GridItem fillColumn={2}>
            <FormControl>
              <Label>Descripción del curso</Label>
              <TextArea
                onChange={handlerChangeDescription}
                value={description}
              ></TextArea>
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <Button variant='outline' onClick={cancelSave}>
              Cancelar
            </Button>

            <Button variant='solid' onClick={saveCourse}>
              Actualizar curso
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};
export default EditCourse;
