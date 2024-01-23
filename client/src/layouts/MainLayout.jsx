import { Outlet } from 'react-router-dom';
import NavBanner from '../components/NavBanner/NavBanner';
import Footer from '../components/Footer/Footer';
const MainLayout = () => {
  return (
    <div>
      <NavBanner />
      <div className="py-10 min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
