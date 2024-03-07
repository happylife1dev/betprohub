import { Fragment, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdOutlineMenu } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownUser from './DropdownUser';
import { LoginDialog } from '../Dashboard/LoginDialog';
import { useDashboardStore } from '@/store/dashboardStore';

interface HeaderProps {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  toggleMenu: boolean;
  setToggleMenu: (arg: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  sidebarOpen,
  setSidebarOpen,
  toggleMenu,
  setToggleMenu,
}) => {
  const isLoggedIn = useDashboardStore((state) => state.isLoggedIn);
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu, 'toggleMenu');
  };

  return (
    <header className="sticky top-0 z-[40] flex w-full bg-primaryY dark:bg-black">
      <div className="flex flex-grow items-center justify-between py-2 pr-md-4 px-2 shadow-2">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          {/* <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} alt="Logo" />
          </Link> */}
        </div>

        <div className="lg:flex bg-whiten dark:bg-boxdark shadow-inner rounded-md p-0.5 ml-3 border border-border-100 cursor-pointer hidden dark:border-black">
          {/* <MdMenu className="mt-1"/> */}

          <span onClick={handleToggleMenu}>
            {toggleMenu ? <RxCross2 size={22} /> : <MdOutlineMenu size={22} />}
          </span>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <DarkModeSwitcher />
          {isLoggedIn ? (
            <>
              <ul className="flex items-center gap-2 2xsm:gap-4">
                {isVisible && (
                  <>
                    <li className="text-black dark:text-primaryY font-bold">
                      Bal : 209
                    </li>
                    <li className="text-black dark:text-primaryY font-bold">
                      Liab : 0
                    </li>
                  </>
                )}
                <li>
                  <span
                    onClick={handleToggleVisibility}
                    className="text-black dark:text-primaryY"
                  >
                    {isVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </li>
              </ul>
              <DropdownUser />
            </>
          ) : (
            <LoginDialog />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
