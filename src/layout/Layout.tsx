import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import GridBgMesh from './GridBgMesh';
import MeshPulse from './MeshPulse';

export default function Layout() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  /** `?hexagon` (any value): honeycomb. Otherwise legacy square mesh. */
  const hexagonBg = searchParams.has('hexagon');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className={`relative flex-1 grid-bg ${
          hexagonBg ? 'grid-bg--hex-mesh' : 'grid-bg--square-mesh'
        } pt-20 sm:pt-24 pb-24`}
      >
        <GridBgMesh variant={hexagonBg ? 'hex' : 'square'} />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
