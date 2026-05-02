import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import GridBgMesh from './GridBgMesh';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex-1 grid-bg pt-20 sm:pt-24 pb-24">
        <GridBgMesh />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
