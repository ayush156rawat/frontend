import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';

const Layout = () => {
  return (
    <div className='min-h-screen'>
      <Header />
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto py-4 px-8">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
      <Footer />
    </div>
  );
};

export default Layout;
