import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Courses from './pages/Courses';
import NewCourse from './components/FormCourses';
import Clases from './pages/Clases';
import NewClases from './components/FormClases';
import Modules from './pages/Modules';
import NewModules from './components/FormModules';
import EditCourse from './components/EditCourse';
import EditClase from './components/EditClase';
import EditModule from './components/EditModule';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate to='/cursos' replace />} />
        <Route path='cursos' element={<Courses />} />
        <Route path='cursos/nuevo' element={<NewCourse />} />
        <Route path='cursos/edit' element={<EditCourse />} />
        <Route path='clases' element={<Clases />} />
        <Route path='clases/nuevo' element={<NewClases />} />
        <Route path='clases/edit' element={<EditClase />} />
        <Route path='modulos' element={<Modules />} />
        <Route path='modulos/nuevo' element={<NewModules />} />
        <Route path='modulos/edit' element={<EditModule />} />
      </Route>
    </Routes>
  );
}

export default App;
