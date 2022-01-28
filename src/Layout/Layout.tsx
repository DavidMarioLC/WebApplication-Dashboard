import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FiBook, FiMonitor, FiBox, BsBoxArrowLeft } from '../Icons';
import { AppProvider } from '../context/app-context';

const Layout = () => {
  return (
    <AppProvider>
      <StyledRoot>
        <nav className='navigation'>
          <div className='logo-wrapper'>
            <img
              className='logo'
              src={process.env.PUBLIC_URL + 'logo.svg'}
              alt=''
              height='48'
              width='48'
            />
            <h1 className='logo-name'>LeonidasEsteban</h1>
          </div>
          <ul className='menu'>
            <li className='menu-item'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'menu-link active' : 'menu-link'
                }
                to='/cursos'
              >
                <div className='iconWrapper'>
                  <FiMonitor className='icon' />
                </div>
                Cursos
              </NavLink>
            </li>
            <li className='menu-item'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'menu-link active' : 'menu-link'
                }
                to='/clases'
              >
                <div className='iconWrapper'>
                  <FiBook className='icon' />
                </div>
                Clases
              </NavLink>
            </li>
            <li className='menu-item'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'menu-link active' : 'menu-link'
                }
                to='/modulos'
              >
                <div className='iconWrapper'>
                  <FiBox className='icon' />
                </div>
                Modulos
              </NavLink>
            </li>
          </ul>

          <div className='user'>
            <figure className='user-figure'>
              <img
                className='user-img'
                src={process.env.PUBLIC_URL + 'avatar.png'}
                // alt='Logo de Leonidas Esteban'
                // title='Logo de Leonidas Esteban'
                width='40'
                height='40'
                alt='logito'
              />
            </figure>
            <p className='user-name'>DavidMarioLC</p>
            <button className='user-btn'>
              <BsBoxArrowLeft className='user-icon' />
            </button>
          </div>
        </nav>
        <main className='principal'>
          <Outlet />
        </main>
      </StyledRoot>
    </AppProvider>
  );
};

const StyledRoot = styled.div`
  display: flex;
  height: 100vh;

  //layout
  .navigation {
    flex-basis: 260px;
    display: flex;
    flex-direction: column;
  }

  .principal {
    flex: 1;
    padding: 2rem;
    background: var(--gray2);
    overflow: auto;
  }

  //logo
  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
    padding: 1rem;
    border-bottom: 1px solid;
  }

  .logo {
    /* width: 100%; */
  }
  .logo-name {
    font: var(--text-text1semibold);
  }

  //menu
  .menu {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .menu-item {
    padding: 0.75rem;
  }

  .menu-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    font: var(--text-text1semibold);
    color: var(--gray);
  }

  .menu-link:active {
    transform: scale(0.98);
  }

  .menu-link.active {
    color: var(--black);
  }

  .menu-link.active > .iconWrapper {
    background: var(--black);
    color: var(--white);
  }
  .iconWrapper {
    width: 40px;
    height: 40px;
    background: var(--white);
    color: var(--black);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: linear 100ms;
  }

  .iconWrapper.active {
    background: var(--black);
    color: var(--white);
  }

  //user
  .user {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
  }
  .user-figure {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-img {
  }

  .user-name {
    font: var(--text-text1semibold);
  }

  .user-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 40px;

    border-radius: 50%;
  }
  .user-btn:hover {
    background: var(--black);
    color: var(--white);
  }

  .user-btn :active {
    transform: scale(0.93);
  }

  .icon {
    font-size: 1.25rem;
  }
`;
export default Layout;
