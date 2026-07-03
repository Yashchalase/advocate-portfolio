import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import FloatingActions from './FloatingActions';

export default function Layout() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <FloatingActions />
    </>
  );
}
