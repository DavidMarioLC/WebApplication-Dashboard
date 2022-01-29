import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import { Search, VStack, HStack, Button, Title, Empty } from '../components';
import { useAppState } from '../context/app-context';
const Module = () => {
  const { searchTerm, searchOnchange } = useSearch();
  const { stateModules } = useAppState();
  const { modules } = stateModules;
  const navigate = useNavigate();

  const goToViewModuleForm = () => {
    navigate('/modulos/nuevo');
  };
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
        ''
      )}
    </VStack>
  );
};

export default Module;
