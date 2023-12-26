import { Outlet } from 'react-router-dom';
import NavBar from './pageComponents/nav-bar';
import Footer from './pageComponents/footer';

const Layout = () => {
  return (
    <div className='overflow-x-hidden m-0 p-0 flex flex-col'>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  );
};

export default Layout;
