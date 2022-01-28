import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

type Toption = {
  label?: string;
  value?: string;
};

type Props = {
  defaultSelect: string;
  options: Toption[];
  handlerChangeOption: (option: string) => void;
};

export const Select = ({
  options,
  handlerChangeOption,
  defaultSelect,
}: Props) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [itemSelect, setItemSelect] = useState<string>(defaultSelect);

  const showMenu = () => {
    setOpenSelect(!openSelect);
  };

  const handlerChangeOptiontest = (option: string = '') => {
    setItemSelect(option);
    handlerChangeOption(option);
  };

  return (
    <StyledSelect onClick={showMenu}>
      <SelectHeader>
        <HeaderTitle>{itemSelect}</HeaderTitle>
        <SelectIcon />
      </SelectHeader>
      <SelectList show={openSelect}>
        {options.map((option) => (
          <SelectItem
            key={Math.random()}
            onClick={() => handlerChangeOptiontest(option.label)}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectList>
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
  font: var(--text-text1regular);
  position: relative;
`;

const SelectHeader = styled.div.attrs((props) => ({
  tabIndex: 1,
  role: 'select',
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-radius: 4px;
  background: var(--white);
  &:active {
    outline: 1px solid;
  }
`;

const HeaderTitle = styled.span``;

const SelectIcon = styled(IoIosArrowDown)``;

const SelectList = styled.ul<{ show: boolean }>`
  z-index: 2;
  flex-direction: column;
  border-radius: 8px;
  background: var(--white);
  filter: drop-shadow(0px 2px 4px rgba(32, 52, 105, 0.25));
  //animation
  top: 52px;
  transition: all 250ms linear;
  opacity: ${({ show }) => (show ? '1' : '0')};
  position: absolute;
  width: 80%;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`;

const SelectItem = styled.li`
  padding: 0.75rem;
  cursor: pointer;
  user-select: none;
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background: rgba(32, 52, 105, 0.056);
  }
`;
