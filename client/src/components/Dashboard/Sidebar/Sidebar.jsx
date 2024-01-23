import { useState } from 'react';
// Components
import MenuItem from './MenuItem';
// Icons
import { AiOutlineBars } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { FaBookBookmark, FaHouse } from 'react-icons/fa6';
import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../../../assets/house.png';

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const [role, setRole] = useState('renter');

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-teal-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            {/* Logo */}
            <Link className="flex items-center justify-center gap-2" to="/">
              <img
                className="hidden md:block"
                src={logo}
                alt="logo"
                width="50"
                height="50"
              />
              <h2 className="text-2xl font-bold">
                House <span className="text-red-400">Hunter</span>
              </h2>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-teal-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-teal-100 mx-auto">
            {/* Logo */}
            <Link className="flex items-center justify-center gap-2" to="/">
              <img
                className="hidden md:block"
                src={logo}
                alt="logo"
                width="50"
                height="50"
              />
              <h2 className="text-xl font-bold">
                House <span className="text-red-400">Hunter</span>
              </h2>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <div className="flex items-center justify-center gap-1">
              <button
                onClick={() => setRole('renter')}
                className={`${
                  role === 'renter' && 'bg-teal-400 text-white'
                } px-3 py-1 rounded font-semibold`}
              >
                Renter
              </button>
              <button
                onClick={() => setRole('owner')}
                className={`${
                  role === 'owner' && 'bg-teal-400 text-white'
                } px-3 py-1 rounded font-semibold`}
              >
                Owner
              </button>
            </div>
            <nav>
              {role === 'renter' && (
                <div>
                  <MenuItem
                    icon={FaBookBookmark}
                    label="My Bookings"
                    address="/dashboard/bookings"
                  />
                  <MenuItem
                    icon={MdModeEdit}
                    label="Manage Bookings"
                    address="/dashboard/manage"
                  />
                </div>
              )}
              {role === 'owner' && (
                <div>
                  <MenuItem
                    icon={FaHouse}
                    label="My Listings"
                    address="/dashboard/listings"
                  />
                  <MenuItem
                    icon={MdModeEdit}
                    label="Manage House"
                    address="/dashboard/manage-house"
                  />
                  <MenuItem
                    icon={IoAddCircleOutline}
                    label="Add House"
                    address="/dashboard/add-house"
                  />
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
