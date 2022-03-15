import React, { useState, useEffect } from "react";
import "./sidenav.css";
import {
  BiSearchAlt,
  BiHomeCircle,
  BiBell,
  BiChart,
  BiPieChartAlt2,
  BiHeart,
  BiWallet,
  BiLogOut,
  BiMoon,
  BiChevronRight,
  BiChevronLeft,
} from "react-icons/bi";

export default function SideNav({ SideToggle, setSideToggle }) {
  const [toggle, setToggle] = useState(true);
  const [DarkMode, setDarkMode] = useState(toggle);

  const toggleClass = " transform translate-x-5";
  useEffect(() => {
    setDarkMode(toggle);
  }, [toggle]);

  const handleToggle = () => {
    setSideToggle(!SideToggle);
  };

  const Switch = () => {
    return (
      <div
        className=" w-10 h-5 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* Switch */}
        <div
          className={
            "bg-black  h-3 w-3 rounded-full shadow-md transform duration-500 ease-in-out" +
            (toggle ? null : toggleClass)
          }
        ></div>
      </div>
    );
  };
  const SideNavMini = () => {
    return (
      <div
        className={
          !DarkMode
            ? "card h-[90vh] bg-slate-200 text-white rounded-lg  dark:bg-slate-800 dark:text-slate-100 mx-5"
            : "card h-[90vh] bg-slate-200 text-white rounded-lg mx-5   "
        }
      >
        <div
          className={
            !DarkMode ? "flex ml-5 relative" : "flex ml-5 text-black relative"
          }
        >
          <div className="bg-purple-600 p-5 rounded-lg  mt-5">SD</div>

          <div
            className="absolute right-[-10px] top-[30px] bg-purple-500 rounded-full"
            onClick={handleToggle}
          >
            {SideToggle ? (
              <BiChevronRight className="w-7 h-7 text-white" />
            ) : (
              <BiChevronLeft className="w-7 h-7 text-white" />
            )}
          </div>
        </div>
        <div
          className={
            !DarkMode
              ? "flex flex-col gap-0 my-5"
              : "flex flex-col gap-0 my-5 text-black"
          }
        >
          <div
            className={
              DarkMode
                ? "flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600"
                : "flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600"
            }
          >
            <BiSearchAlt className="w-7 h-7 " />
          </div>
          <div className="flex gap-3 items-center justify-center  mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiHomeCircle className="w-7 h-7" />
          </div>
          <div className="flex gap-3 items-center justify-center  mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiBell className="w-7 h-7" />
          </div>
          <div className="flex gap-3 items-center justify-center  mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiChart className="w-7 h-7" />
          </div>
          <div className="flex gap-3 items-center justify-center  mx-5 p-4  rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiHeart className="w-7 h-7" />
          </div>
          <div className="flex gap-3 items-center justify-center  mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiPieChartAlt2 className="w-7 h-7" />
          </div>
          <div className="flex gap-3 items-center justify-center  mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiWallet className="w-7 h-7" />
          </div>
          <div className="flex gap-3 items-center  justify-center mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <div className="font-medium flex justify-around">
              <Switch />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  };
  const SideNavBig = () => {
    return (
      <div
        className={
          !DarkMode
            ? "card h-[90vh] bg-slate-200 text-white rounded-lg  dark:bg-slate-800 dark:text-slate-100 mx-5"
            : "card h-[90vh] bg-slate-200 text-white rounded-lg mx-5   "
        }
      >
        <div
          className={
            !DarkMode ? "flex ml-5 relative" : "flex ml-5 text-black relative"
          }
        >
          <div className="bg-purple-600 p-5 rounded-lg  mt-5">SD</div>
          <div className="flex ml-5 mt-5 flex-col justify-center">
            <div className="text-base">Snehasis Debbarman</div>
            <div className="text-sm">Frontend Engineer</div>
          </div>
          <div
            className="absolute right-[-10px] top-[30px] bg-purple-500 rounded-full"
            onClick={handleToggle}
          >
            {SideToggle ? (
              <BiChevronRight className="w-7 h-7 text-white" />
            ) : (
              <BiChevronLeft className="w-7 h-7 text-white" />
            )}
          </div>
        </div>
        <div
          className={
            !DarkMode
              ? "flex flex-col gap-0 my-5"
              : "flex flex-col gap-0 my-5 text-black"
          }
        >
          <div
            className={
              DarkMode
                ? "flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600"
                : "flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600"
            }
          >
            <BiSearchAlt className="w-6 h-6 " />
            <div className="font-medium">Search</div>
          </div>
          <div className="flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiHomeCircle className="w-6 h-6" />
            <div className="font-medium  ">Home</div>
          </div>
          <div className="flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiBell className="w-6 h-6" />
            <div className="font-medium ">Notification</div>
          </div>
          <div className="flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiChart className="w-6 h-6" />
            <div className="font-medium ">Chart</div>
          </div>
          <div className="flex gap-3 items-center mx-5 p-4  rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiHeart className="w-6 h-6" />
            <div className="font-medium ">Likes</div>
          </div>
          <div className="flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiPieChartAlt2 className="w-6 h-6" />
            <div className="font-medium ">Activity</div>
          </div>
          <div className="flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiWallet className="w-6 h-6" />
            <div className="font-medium ">Wallet</div>
          </div>
          <div className="flex gap-3 items-center mx-5 p-4 rounded-lg hover:bg-slate-600 dark:hover:bg-slate-600">
            <BiMoon className="w-6 h-6" />
            <p> Dark Mode</p>
            <div className="font-medium flex justify-around">
              <Switch />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  };
  return <>{SideToggle ? <SideNavBig /> : <SideNavMini />}</>;
}
