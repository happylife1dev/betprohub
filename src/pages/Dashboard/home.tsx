import { GiDart, GiHockey } from 'react-icons/gi';
import { IoBasketballOutline, IoInformationCircle } from 'react-icons/io5';
import {
  MdOutlineSportsSoccer,
  MdOutlineSportsTennis,
  MdSportsCricket,
} from 'react-icons/md';
import { PiTelevision, PiTimerBold } from 'react-icons/pi';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import Cards from '../../components/Dashboard/Cards.tsx';
import HomeCarousel from '../../components/Dashboard/HomeCarousel.tsx';
import HorseCarousel from '../../components/Dashboard/HorseCarousel.tsx';

const Home = () => {
  return (
    <>
      <div className="bg-white p-3 shadow-md dark:bg-black">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-8 2xl:gap-7.5">
          <Cards />
        </div>
      </div>
      <div className="content-wrap mt-6 bg-white p-3 shadow-md dark:bg-black">
        <HomeCarousel />
      </div>
      <div className="">
        <h3 className="text-black font-semibold py-2 dark:text-white flex items-center gap-2.5 text-xl">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 576 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M575.92 76.6c-.01-8.13-3.02-15.87-8.58-21.8-3.78-4.03-8.58-9.12-13.69-14.5 11.06-6.84 19.5-17.49 22.18-30.66C576.85 4.68 572.96 0 567.9 0H447.92c-70.69 0-128 57.31-128 128H160c-28.84 0-54.4 12.98-72 33.11V160c-48.53 0-88 39.47-88 88v56c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-56c0-13.22 6.87-24.39 16.78-31.68-.21 2.58-.78 5.05-.78 7.68 0 27.64 11.84 52.36 30.54 69.88l-25.72 68.6a63.945 63.945 0 0 0-2.16 37.99l24.85 99.41A15.982 15.982 0 0 0 107.02 512h65.96c10.41 0 18.05-9.78 15.52-19.88l-26.31-105.26 23.84-63.59L320 345.6V496c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V318.22c19.74-20.19 32-47.75 32-78.22 0-.22-.07-.42-.08-.64V136.89l16 7.11 18.9 37.7c7.45 14.87 25.05 21.55 40.49 15.37l32.55-13.02a31.997 31.997 0 0 0 20.12-29.74l-.06-77.71zm-64 19.4c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
          </svg>
          Horse Race
        </h3>
        <div className="bg-white p-3 shadow-md dark:bg-black mb-0.5">
          <HorseCarousel />
        </div>
      </div>
      <div className="">
        <h3 className="text-black font-semibold py-2 dark:text-white flex items-center gap-2.5 text-xl">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 576 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M575.92 76.6c-.01-8.13-3.02-15.87-8.58-21.8-3.78-4.03-8.58-9.12-13.69-14.5 11.06-6.84 19.5-17.49 22.18-30.66C576.85 4.68 572.96 0 567.9 0H447.92c-70.69 0-128 57.31-128 128H160c-28.84 0-54.4 12.98-72 33.11V160c-48.53 0-88 39.47-88 88v56c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-56c0-13.22 6.87-24.39 16.78-31.68-.21 2.58-.78 5.05-.78 7.68 0 27.64 11.84 52.36 30.54 69.88l-25.72 68.6a63.945 63.945 0 0 0-2.16 37.99l24.85 99.41A15.982 15.982 0 0 0 107.02 512h65.96c10.41 0 18.05-9.78 15.52-19.88l-26.31-105.26 23.84-63.59L320 345.6V496c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V318.22c19.74-20.19 32-47.75 32-78.22 0-.22-.07-.42-.08-.64V136.89l16 7.11 18.9 37.7c7.45 14.87 25.05 21.55 40.49 15.37l32.55-13.02a31.997 31.997 0 0 0 20.12-29.74l-.06-77.71zm-64 19.4c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
          </svg>
          Grey Hound
        </h3>
        <div className="bg-white p-3 shadow-md dark:bg-black mb-0.5">
          <HorseCarousel />
        </div>
      </div>
      <Tabs>
        <TabList className="border-0 flex overflow-auto">
          <Tab className="outline-none w-22 text-white rounded-none mr-0.5 mt-0.5 bg-activeGreen flex-none absolute md:static">
            <div className="text-right pr-1.5">
              <i className="">0</i>
            </div>
            <PiTimerBold className="mx-auto" size={30} />
            <h6 className="m-0 text-center">Inplay</h6>
          </Tab>
          <Tab className="outline-none w-22 bg-primaryY text-black rounded-none mr-0.5 mt-0.5 flex-none ml-22.5 md:ml-0">
            <div className="text-right pr-1.5">
              <i className="">8</i>
            </div>
            <MdSportsCricket className="mx-auto" size={30} />
            <h6 className="m-0 text-center">Cricket</h6>
          </Tab>
          <Tab className="outline-none w-22 bg-primaryY text-black rounded-none mr-0.5 mt-0.5 flex-none">
            <div className="text-right pr-1.5">
              <i className="">0</i>
            </div>
            <MdOutlineSportsTennis className="mx-auto" size={30} />
            <h6 className="m-0 text-center">Tennis</h6>
          </Tab>
          <Tab className="outline-none w-22 bg-primaryY text-black rounded-none mr-0.5 mt-0.5 flex-none">
            <div className="text-right pr-1.5">
              <i className="">50</i>
            </div>
            <MdOutlineSportsSoccer className="mx-auto" size={30} />
            <h6 className="m-0 text-center">Soccer</h6>
          </Tab>
          <Tab className="outline-none w-22 bg-primaryY text-black rounded-none mr-0.5 mt-0.5 flex-none">
            <div className="text-right pr-1.5">
              <i className="">8</i>
            </div>
            <IoBasketballOutline className="mx-auto" size={30} />

            <h6 className="m-0 text-center">Basketball</h6>
          </Tab>
          <Tab className="outline-none w-22 bg-primaryY text-black rounded-none mr-0.5 mt-0.5 flex-none">
            <div className="text-right pr-1.5">
              <i className="">0</i>
            </div>
            <GiDart className="mx-auto" size={30} />
            <h6 className="m-0 text-center">Darts</h6>
          </Tab>
          <Tab className="outline-none w-22 bg-primaryY text-black rounded-none mr-0.5 mt-0.5 flex-none">
            <div className="text-right pr-1.5">
              <i className="">50</i>
            </div>
            <GiHockey className="mx-auto" size={30} />
            <h6 className="m-0 text-center">Ice Hockey</h6>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="my-0.5">
            <table className="table w-full ">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th className="p-1.5 border-b border-gray w-7/12" colSpan={2}>
                    <div className="flex gap-2 font-medium">
                      <MdSportsCricket className="" size={20} /> Cricket
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="mb-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 border-b border-gray w-7/12 font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <MdOutlineSportsTennis className="" size={20} /> Tennis
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell  font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="mb-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 border-b border-gray w-7/12 font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <MdOutlineSportsSoccer className="" size={20} /> Soccer
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="my-0.5">
            <table className="table w-full ">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 w-7/12 border-b border-gray font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <IoBasketballOutline className="" size={20} /> Basketball
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="mb-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 border-b border-gray w-7/12 font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <GiDart className="" size={20} /> Darts
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="mb-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 border-b border-gray w-7/12 font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <GiHockey className="" size={20} /> Ice Hockey
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 w-7/12 border-b border-gray font-medium "
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <MdSportsCricket className="" size={20} /> Cricket
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-activeGreen text-white border-b border-indigo-200 w-5%">
                    <div className="text-center p-1">
                      <span className="block text-sm">InPlay</span>
                      <span className="block text-sm">13:45</span>
                      <span className="hidden">
                        2023-12-20T08:15:00.0000000Z
                      </span>
                    </div>
                  </td>
                  <td className=" border-b border-indigo-200">
                    <div className="px-2">
                      <strong className="font-medium md:font-semibold text-graydark dark:text-white">
                        <a href="#">Premium Paks v Premium Afghans </a>
                      </strong>
                    </div>
                  </td>
                  <td className=" border-b border-indigo-200">
                    <div className="block md:flex flex-wrap text-right items-center pr-3 justify-end">
                      <div className="flex gap-1 flex-wrap justify-end">
                        <span>
                          <PiTelevision />
                        </span>
                        <span>
                          <PiTelevision />
                        </span>
                        <span>
                          <PiTelevision />
                        </span>
                      </div>
                      <span className="text-sm">148,598</span>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxBlue text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxRed text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className="w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="m-0.5 text-center bg-tableBoxBlue-200 text-black py-3">
                      <strong> </strong>
                      <span>-</span>
                    </div>
                  </td>
                  <td className="w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="m-0.5 text-center bg-tableBoxRed-200 text-black py-3">
                      <strong></strong>
                      <span>-</span>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxBlue text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxRed text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className="action px-2 border-b border-indigo-200">
                    <a href="#">
                      <IoInformationCircle />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="bg-activeGreen w-10 text-white border-b border-indigo-200">
                    <div className="text-center  p-1">
                      <span className="block text-sm">InPlay</span>
                      <span className="block text-sm">13:45</span>
                      <span className="hidden">
                        2023-12-20T08:15:00.0000000Z
                      </span>
                    </div>
                  </td>
                  <td className=" border-b border-indigo-200">
                    <div className="px-2 ">
                      <strong className="font-medium md:font-semibold text-graydark dark:text-white">
                        <a href="#"> Erzurum BB v Umraniyespor </a>
                      </strong>
                    </div>
                  </td>
                  <td className=" border-b border-indigo-200">
                    <div className="block text-right md:flex flex-wrap items-center pr-3 justify-end">
                      <div className="flex gap-1 flex-wrap justify-end">
                        <span>
                          <PiTelevision />
                        </span>
                      </div>
                      <span className="text-sm">148,598</span>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxBlue text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxRed text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className="w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="m-0.5 text-center bg-tableBoxBlue-200 text-black py-3">
                      <strong> </strong>
                      <span>-</span>
                    </div>
                  </td>
                  <td className="w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="m-0.5 text-center bg-tableBoxRed-200 text-black py-3">
                      <strong></strong>
                      <span>-</span>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxBlue text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxRed text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className="action px-2 border-b border-indigo-200">
                    <a href="#">
                      <IoInformationCircle />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="bg-stroke dark:bg-black dark:text-white border-b border-indigo-200">
                    <div className="text-center  p-1">
                      <span className="block text-sm">Today</span>
                      <span className="block text-sm">13:45</span>
                      <span className="hidden">
                        2023-12-20T08:15:00.0000000Z
                      </span>
                    </div>
                  </td>
                  <td className=" border-b border-indigo-200">
                    <div className="px-2">
                      <strong className="font-medium md:font-semibold text-graydark dark:text-white">
                        <a href="#"> Erzurum BB v Umraniyespor </a>
                      </strong>
                    </div>
                  </td>
                  <td className=" border-b border-indigo-200">
                    <div className="block text-right md:flex flex-wrap items-center pr-3 justify-end">
                      <span className="text-sm">148,598</span>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxBlue text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxRed text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className="w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="m-0.5 text-center bg-tableBoxBlue-200 text-black py-3">
                      <strong> </strong>
                      <span>-</span>
                    </div>
                  </td>
                  <td className="w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="m-0.5 text-center bg-tableBoxRed-200 text-black py-3">
                      <strong></strong>
                      <span>-</span>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxBlue text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className=" w-20 hidden md:table-cell border-b border-indigo-200">
                    <div className="mx-0.5 text-center bg-tableBoxRed text-black">
                      <div className="text-xl">
                        {' '}
                        <strong>1.85</strong>
                      </div>
                      <div className="text-sm">
                        <span>55.18k</span>
                      </div>
                    </div>
                  </td>
                  <td className="action px-2 border-b border-indigo-200">
                    <a href="#">
                      <IoInformationCircle />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 w-7/12 border-b border-gray font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <MdOutlineSportsTennis className="" size={20} /> Tennis
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 w-7/12 border-b border-gray font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <MdOutlineSportsSoccer className="" size={20} /> Soccer
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 w-7/12 border-b border-gray font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <IoBasketballOutline className="" size={20} /> Basketball
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 w-7/12 border-b border-gray font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <GiDart className="" size={20} /> Darts
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-0.5">
            <table className="table w-full">
              <thead className="bg-stroke dark:bg-black">
                <tr>
                  <th
                    className="p-1.5 w-7/12 border-b border-gray font-medium"
                    colSpan={2}
                  >
                    <div className="flex gap-2">
                      <GiHockey className="" size={20} /> Ice Hockey
                    </div>
                  </th>
                  <th className="p-1.5 border-b border-gray font-medium">
                    Matched
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    1
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    X
                  </th>
                  <th
                    className="p-1.5 border-b border-gray hidden md:table-cell font-medium"
                    colSpan={2}
                  >
                    2
                  </th>
                  <th className="p-1.5 border-b border-gray"></th>
                </tr>
              </thead>
            </table>
          </div>
        </TabPanel>
      </Tabs>
      {/* <div className='bg-white p-3 shadow-md '>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-8 2xl:gap-7.5">
        <Cards />
      </div>
    </div> */}
    </>
  );
};

export default Home;
