import { Outlet } from 'react-router-dom';
import NavBanner from '../components/NavBanner/NavBanner';
import Footer from '../components/Footer/Footer';
const MainLayout = () => {
  return (
    <div>
      <NavBanner />
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
