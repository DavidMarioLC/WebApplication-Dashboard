import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Courses from './pages/Courses';
import NewCourse from './components/NewCourse';
import Clases from './components/Clases';
import NewClases from './components/NewClases';
import Modules from './components/Modules';
import NewModules from './components/NewModules';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate to='/cursos' replace />} />
        <Route path='cursos' element={<Courses />} />
        <Route path='cursos/nuevo' element={<NewCourse />} />
        <Route path='clases' element={<Clases />} />
        <Route path='clases/nuevo' element={<NewClases />} />
        <Route path='modulos' element={<Modules />} />
        <Route path='modulos/nuevo' element={<NewModules />} />
      </Route>
    </Routes>
  );
}

export default App;
