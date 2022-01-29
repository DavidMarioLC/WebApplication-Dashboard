import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import { Search, VStack, HStack, Button, Title, Empty } from '../components';
import { useAppState } from '../context/app-context';

const Clases = () => {
  const { searchTerm, searchOnchange } = useSearch();
  const { stateClases } = useAppState();
  const { clases } = stateClases;

  const navigate = useNavigate();
  const goToViewClassForm = () => {
    navigate('/clases/nuevo');
  };
  return (
    <VStack gap='2rem'>
      <Search searchTerm={searchTerm} onChange={searchOnchange} />
      <HStack justify='space-between' align='center'>
        <Title>Todos las clases ({clases.length})</Title>
        <Button variant='solid' onClick={goToViewClassForm}>
          Agregar clase
        </Button>
      </HStack>
      {clases.length === 0 ? (
        <Empty description='Empieza a agregar tu primera clase.' />
      ) : (
        ''
      )}
    </VStack>
  );
};

export default Clases;
