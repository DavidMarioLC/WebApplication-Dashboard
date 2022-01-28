import { useState, useRef, ChangeEvent } from 'react';
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
} from './index';

import { useAppState } from '../context/app-context';
import { useNavigate } from 'react-router-dom';
import { TCourse } from '../types/types';

const FormCourses = () => {
  const navigate = useNavigate();
  const { stateCourses } = useAppState();
  const fileRef = useRef<HTMLInputElement>(null);

  const [newCourse, setNewCourse] = useState<TCourse>({
    id: '',
    name: '',
    slug: '',
    status: '',
    teacher: '',
    duration: '',
    module: '',
    price: '',
    money: '',
    image: '',
    description: '',
  });

  const { name, slug, duration, module, price, description } = newCourse;

  const saveCourse = () => {
    const { setCourses, courses } = stateCourses;
    let uuid = Math.random();

    const course: TCourse = {
      ...newCourse,
      id: uuid.toString(),
    };

    setCourses([...courses, course]);
    cancelSave();

    navigate('/cursos');
  };

  const cancelSave = () => {
    setNewCourse({
      id: '',
      name: '',
      slug: '',
      status: '',
      teacher: '',
      duration: '',
      module: '',
      price: '',
      money: '',
      image: '',
      description: '',
    });

    SetPreviewImage({
      nameImage: '',
      urlImage: '',
    });
  };

  const [previewImage, SetPreviewImage] = useState({
    nameImage: '',
    urlImage: '',
  });

  const handleOnclickUpload = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  const handlerChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files!['0'];
    const nameImage = file.name;
    const urlImage = URL.createObjectURL(file);
    console.log(file);
    localStorage.setItem('img', urlImage);
    SetPreviewImage({
      ...previewImage,
      nameImage,
      urlImage,
    });

    setNewCourse({
      ...newCourse,
      image: urlImage,
    });
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
    setNewCourse({
      ...newCourse,
      teacher: option,
    });
  };

  const handlerChangeChangeStatus = (option: string) => {
    setNewCourse({
      ...newCourse,
      status: option,
    });
  };

  const handlerChangeMoney = (option: string) => {
    setNewCourse({
      ...newCourse,
      money: option,
    });
  };

  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourse({
      ...newCourse,
      [event.target.name]: event.target.value,
    });
  };

  const handlerChangeDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewCourse({
      ...newCourse,
      description: event.target.value,
    });
  };
  return (
    <>
      <Title>Nuevo Curso</Title>
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
                defaultSelect='Selecciona el status'
                options={statusOptions}
                handlerChangeOption={handlerChangeChangeStatus}
              />
            </FormControl>
          </GridItem>
          <GridItem fillColumn={1}>
            <FormControl>
              <Label>Profesor</Label>
              <Select
                defaultSelect='Selecciona el profesor'
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
            <Preview image={previewImage} />
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
              Guardar
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};
export default FormCourses;
