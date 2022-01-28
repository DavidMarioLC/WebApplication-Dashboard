import { Dispatch, SetStateAction } from 'react';

export type TCourse = {
  id: string;
  name: string;
  slug: string;
  status: string;
  teacher: string;
  duration: string;
  module: string;
  price: string;
  money: string;
  image: string;
  description: string;
};

export type TClase = {
  name: string;
  slug: string;
  module: string;
  link: string;
  description: string;
};

export type TModule = {
  title: string;
  slug: string;
  mod: string;
  orden: string;
};

export type TypeAppContext = {
  stateCourses: {
    courses: TCourse[];
    setCourses: Dispatch<SetStateAction<TCourse[]>>;
  };
  stateClases: {
    clases: TClase[];
    setClases: Dispatch<SetStateAction<TClase[]>>;
  };
  stateModules: {
    modules: TModule[];
    setModules: Dispatch<SetStateAction<TModule[]>>;
  };
};
