import Lottie from 'lottie-react';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import houseRentAnimation from '../assets/houseAnim.json';

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar Component */}
      <Sidebar />
      {/* dashboard display */}
      <div className="flex-1 md:ml-64 bg-sky-100">
        <div className="p-5 flex items-center justify-center">
          {/* Outlet for dynamic contents */}
          <div className="max-w-2xl mt-16">
            <Lottie animationData={houseRentAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
