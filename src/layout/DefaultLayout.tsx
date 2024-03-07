import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar';

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const[toggleMenu,setToggleMenu]=useState(true)
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className='justify-between h-full flex flex-col flex-shrink-0 flex-grow-0 flex-auto w-full'>
            <div className="mx-auto max-w-screen-3xl p-4 md:p-6 2xl:p-10 w-full">
              <Outlet />
            </div>
            <Footer/>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
