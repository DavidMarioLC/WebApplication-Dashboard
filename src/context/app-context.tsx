import { createContext, useContext, useState } from 'react';
import { TClase, TCourse, TModule, TypeAppContext } from '../types/types';

type AppProviderProps = { children: React.ReactNode };

const AppContext = createContext<TypeAppContext>({
  stateCourses: {
    courses: [],
    setCourses: () => {},
  },
  stateClases: {
    clases: [],
    setClases: () => {},
  },
  stateModules: {
    modules: [],
    setModules: () => {},
  },
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [courses, setCourses] = useState<TCourse[]>([]);
  const [clases, setClases] = useState<TClase[]>([]);
  const [modules, setModules] = useState<TModule[]>([]);

  return (
    <AppContext.Provider
      value={{
        stateCourses: {
          courses,
          setCourses,
        },
        stateClases: {
          clases,
          setClases,
        },
        stateModules: {
          modules,
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
