import { Dispatch, SetStateAction } from 'react';

export type TPreview = {
  nameImage: string;
  urlImage: string;
};

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
  image: TPreview;
  description: string;
};

export type TClase = {
  id: string;
  name: string;
  slug: string;
  path: string;
  link: string;
  description: string;
};

export type TModule = {
  id: string;
  title: string;
  slug: string;
  mod: string;
  orden: string;
};

export type TypeAppContext = {
  stateCourses: {
    courses: TCourse[];
    setCourses: Dispatch<SetStateAction<TCourse[]>>;
    course: TCourse;
    setCourse: Dispatch<SetStateAction<TCourse>>;
  };
  stateClases: {
    clases: TClase[];
    setClases: Dispatch<SetStateAction<TClase[]>>;
    clase: TClase;
    setClase: Dispatch<SetStateAction<TClase>>;
  };
  stateModules: {
    modules: TModule[];
    setModules: Dispatch<SetStateAction<TModule[]>>;
    module: TModule;
    setModule: Dispatch<SetStateAction<TModule>>;
  };
};
