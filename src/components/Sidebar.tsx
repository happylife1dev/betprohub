import React, { useEffect, useRef, useState } from 'react';
import { CgCardSpades } from "react-icons/cg";
import { FaHorse, FaStar } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { GiCardKingSpades } from "react-icons/gi";
import { MdOutlineSportsSoccer, MdOutlineSportsTennis, MdSportsCricket } from "react-icons/md";
import { RiStarSLine } from "react-icons/ri";
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/logo.svg';


const sideBarMenus = [
  { "label": "Soccer", "icon": <MdOutlineSportsSoccer size={24} />, "path": "/soccer" },
  { "label": "Tennis", "icon": <MdOutlineSportsTennis size={24} />, "path": "/tennis" },
  { "label": "Cricket", "icon": <MdSportsCricket size={24} />, "path": "/cricket" },
  { "label": "Horse Race", "icon": <FaHorse size={24} />, "path": "/horseRace" },
  { "label": "Greyhound", "icon": <FaHorse size={24} />, "path": "/greyHound" },
  { "label": "RoyalStar Casino", "icon": <FaStar size={24} />, "path": "/royalStarCasino" },
  { "label": "Star Casino", "icon": <RiStarSLine size={24} />, "path": "/starCasino" },
  { "label": "World Casino", "icon": <FaEarthAfrica size={24} />, "path": "/worldCasino" },
  { "label": "Royal Casino", "icon": <CgCardSpades size={24} />, "path": "/royalCasino" },
  { "label": "BetFairGames", "icon": <FaEarthAfrica size={24} />, "path": "/betFairGames" },
  { "label": "TeenPatti Studio", "icon": <GiCardKingSpades size={24} />, "path": "/teenPatti" },

]


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  toggleMenu:boolean;
  setToggleMenu: (arg: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, toggleMenu, setToggleMenu }) => {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-13 z-[40] flex h-screen w-42.5 flex-col overflow-y-hidden bg-primaryY duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${toggleMenu ? '' : 'ml-[-170px]'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-4 py-4 lg:py-4">
        <NavLink to="/" className="w-26 mx-auto">
          <img src={Logo} alt="Logo" />
        </NavLink>

        {/* <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button> */}
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-2 px-0 lg:mt-5 lg:px-0">
          {/* <!-- Menu Group --> */}
          <div>
            {/* <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2 ">
              MENU
            </h3> */}

            <ul className="mb-6 flex flex-col">

              {
                sideBarMenus.map((menu: any, key: number) => (
                  <li key={key}> 
                    <NavLink
                      to={menu.path}
                      className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-black duration-300 ease-in-out hover:bg-black hover:text-bodydark1 dark:hover:bg-meta-4 text-sm ${pathname.includes(menu.path) && 'bg-black dark:bg-meta-4 text-white'}`}
                    >
                      {menu.icon}
                      {menu.label}
                    </NavLink>
                  </li>
                ))
              }

              {/* <!-- Menu Item Calendar --> */}
                     
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
