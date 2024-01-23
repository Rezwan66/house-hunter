import { Link } from 'react-router-dom';

import Container from '../Container/Container';
import MenuDropdown from './MenuDropdown';
import logo from '../../assets/house.png';
import Banner from './Banner';

const NavBanner = () => {
  return (
    <div className="relative w-full bg-teal-200 z-10 shadow-sm">
      <div className="py-4 ">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
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
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
      <Banner />
    </div>
  );
};

export default NavBanner;
