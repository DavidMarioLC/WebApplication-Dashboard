import { useState } from 'react';
import { useAppState } from '../context/app-context';

export const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const changeVisibility = () => {
    setVisible(!visible);
  };

  return {
    visible,
    changeVisibility,
  };
};
