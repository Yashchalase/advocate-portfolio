import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import ScrollToTop from './ScrollToTop';
import LegalDisclaimer from './LegalDisclaimer';
import FloatingActions from './FloatingActions';

export default function Layout() {
  return (
    <>
      <LegalDisclaimer />
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
