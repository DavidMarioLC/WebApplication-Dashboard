import { createContext, useContext, useState } from 'react';
import { TClase, TCourse, TModule, TypeAppContext } from '../types/types';

type AppProviderProps = { children: React.ReactNode };

const AppContext = createContext<TypeAppContext>({
  stateCourses: {
    courses: [],
    setCourses: () => {},
    course: {
      id: '',
      name: '',
      slug: '',
      status: '',
      teacher: '',
      duration: '',
      module: '',
      price: '',
      money: '',
      image: {
        nameImage: '',
        urlImage: '',
      },
      description: '',
    },
    setCourse: () => {},
  },
  stateClases: {
    clases: [],
    clase: {
      id: '',
      name: '',
      slug: '',
      path: '',
      link: '',
      description: '',
    },
    setClase: () => {},
    setClases: () => {},
  },
  stateModules: {
    modules: [],
    module: {
      id: '',
      title: '',
      slug: '',
      mod: '',
      orden: '',
    },
    setModules: () => {},
    setModule: () => {},
  },
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [courses, setCourses] = useState<TCourse[]>([]);
  const [clases, setClases] = useState<TClase[]>([]);
  const [modules, setModules] = useState<TModule[]>([]);
  const [course, setCourse] = useState<TCourse>({
    id: '',
    name: '',
    slug: '',
    status: '',
    teacher: '',
    duration: '',
    module: '',
    price: '',
    money: '',
    image: {
      nameImage: '',
      urlImage: '',
    },
    description: '',
  });
  const [clase, setClase] = useState<TClase>({
    id: '',
    name: '',
    slug: '',
    path: '',
    link: '',
    description: '',
  });

  const [module, setModule] = useState<TModule>({
    id: '',
    title: '',
    slug: '',
    mod: '',
    orden: '',
  });

  return (
    <AppContext.Provider
      value={{
        stateCourses: {
          courses,
          setCourses,
          course,
          setCourse,
        },
        stateClases: {
          clases,
          setClases,
          clase,
          setClase,
        },
        stateModules: {
          modules,
          module,
          setModule,
          setModules,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a CountProvider');
  }
  return context;
};

export { AppProvider, useAppState };
