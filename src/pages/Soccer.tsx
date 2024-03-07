import React from "react";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { TiStopwatch } from "react-icons/ti";
import { IoIosStopwatch } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";

function Soccer() {
  return (
    <>
      <div className="flex gap-2">
        <div className="w-8/12">
          <div className="flex bg-primaryY items-start p-2.5 leading-1 gap-3">
            <div className="bg-activeGreen p-2.5 text-white rounded-sm">
              <MdOutlineSportsSoccer size={28} />
            </div>
            <div className="flex w-full justify-between">
              <div className="text-black pt-1">
                <div className="flex items-center ">
                  <span className="text-activeGreen">
                    <TiStopwatch size={20} />
                  </span>
                  <span className="black-light-text pl-1">
                    in 9 hours | Dec 23 1:15 am
                  </span>
                  <span className="black-light-text"> | Winners: 1</span>
                </div>
                <h4 className="text-2xl font-bold">AC Monza v Fiorentina</h4>
                <p className="text-sm font-medium">Remaining : 08:32:36</p>
              </div>
              <p className="text-2xl font-bold text-activeGreen">OPEN</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <p className="">
                    <span className="">
                      <i className=""><IoIosStopwatch/></i>
                      <span>Match Odds </span>
                      <span>(MaxBet: 250K)</span>
                    </span>
                    <span className="">
                        <IoInformationCircle />
                    </span>
                  </p>
                  <div className="">
                    <span></span>
                    <strong>Back</strong>
                  </div>
                  <div className="">
                    <strong>Lay</strong>
                  </div>
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="w-4/12"></div>
      </div>
    </>
  );
}

export default Soccer;
