import { useState } from 'react';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return { searchTerm, searchOnchange };
};
