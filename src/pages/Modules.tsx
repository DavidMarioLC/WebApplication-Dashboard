import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import { Search, VStack, HStack, Button, Title } from '../components';

const Module = () => {
  const { searchTerm, searchOnchange } = useSearch();
  const navigate = useNavigate();

  const goToViewModuleForm = () => {
    navigate('/modulos/nuevo');
  };
  return (
    <VStack gap='2rem'>
      <Search searchTerm={searchTerm} onChange={searchOnchange} />
      <HStack justify='space-between' align='center'>
        <Title>Todos los Cursos (3)</Title>
        <Button variant='solid' onClick={goToViewModuleForm}>
          Agregar modulo
        </Button>
      </HStack>
    </VStack>
  );
};

export default Module;
