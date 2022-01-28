import styled from 'styled-components';
import { FiSearch } from '../Icons';

type Tprops = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

export const Search = ({ onChange, searchTerm }: Tprops) => {
  return (
    <StyledRoot>
      <SearchInput
        onChange={onChange}
        value={searchTerm}
        type='search'
        placeholder='Buscar...'
      />
      <SearchIcon />
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: flex;
  position: relative;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  left: 16px;
  font-size: 1.5rem;
  color: var(--gray);
`;

const SearchInput = styled.input`
  border: none;
  height: 30px;
  width: 600px;
  border-radius: 40px;
  padding: 1.5rem 1rem 1.5rem 3rem;
  color: var(--gray);
  font: var(--text-text1regular);
  outline: none;
  color: var(--black);

  &:focus-visible {
    outline: 2px solid var(--black);
  }

  &:focus-visible + ${SearchIcon} {
    color: var(--black);
  }
`;
