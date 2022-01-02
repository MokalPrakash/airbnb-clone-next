import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder, collapsed }) {
  const [fillHeader, setFillHeader] = useState(false); // for header full or not
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const Router = useRouter();
  const headerRef = useRef();

  const handlePicker = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleScroll = () => {
    if (!headerRef.current) return;
    const { clientHeight } = headerRef.current;

    if (window.pageYOffset > clientHeight / 2) {
      setFillHeader(true);
    } else {
      setFillHeader(false);
    }
  };

  useEffect(() => {
    if (collapsed) {
      setFillHeader(true);
    } else {
      document.onload = handleScroll();
      window.addEventListener("scroll", handleScroll);

      return () => window.addEventListener("scroll", handleScroll);
    }
  }, []);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
    minDate: new Date(),
  };

  const search = () => {
    Router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
    setSearchInput("");
    setFillHeader(true);
  };

  const handleInput = ({target})=> {
    setSearchInput(target.value);
    setFillHeader(true);
  }
  return (
    <header
      ref={headerRef}
      className={`${collapsed ? 'fixed' : 'fixed'} w-full top-0 z-50 grid grid-cols-6 bg-trasparent p-5 md:px-10 ${fillHeader ? 'bg-white transition ease-in-out duration-500 shadow-md' : 'transition duration-500'}`}
    >
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => Router.push("/")}
      >
        <Image
          src="/images/Airbnb_Logo.png"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Mid Section */}
        {/* Small input */}
        <div className={`flex flex-grow z-50 items-center border-2 rounded-full bg-gray-100 md:hidden col-start-1 col-end-7 focus-within:shadow-sm `}>
          <input
            value={searchInput}
            onChange={handleInput}
            className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-700 focus:placeholder-transparent w-full text-center'
            type="text"
            placeholder={placeholder || 'Where are you going?'}
          />
          <SearchIcon className='h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer' />
        </div>

      {/* Normal input */}
      <div
        className={`${fillHeader ? 'flex md:flex' : 'hidden'} hidden z-40 items-center border-2 rounded-full py-2 bg-gray-100 md:shadow-sm col-start-3 col-end-5 focus-within:shadow-sm `}
      >
        <input
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={handleInput}
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      <div className={`${fillHeader ? 'pointer-events-none opacity-0 w-0 transform -translate-y-10 transition duration-200 ease-in-out' : 'transition duration-300'} hidden md:block absolute top-24 lg:top-8 left-[50%] transform -translate-x-1/2 w-[90%] md:w-[85%] lg:w-2/3 max-w-4xl`}>

        <div className='flex items-center justify-center gap-x-8 text-gray-700 mb-8'>
          <h2 className='header__link active '>Places to stay</h2>
          <h2 className='header__link '>Experiences</h2>
          <h2 className='header__link '>Online Experiences</h2>
        </div>
        
        <div className='grid grid-cols-4 divide-x-2 items-center bg-white rounded-full'>
          <div className='pl-6 py-3 hover:bg-gray-100 rounded-full cursor-pointer'>
            <h3 className='text-xs font-bold'>Location</h3>
            <input
              value={searchInput}
              onChange={({target})=> setSearchInput(target.value)}
              className='outline-none text-sm text-gray-100 focus:text-gray-800 placeholder-gray-400 bg-transparent w-3/4 trunc'
              type="text"
              placeholder='Where are you going?'
            />
          </div>

          <div className='flex flex-col pl-6 justify-center hover:bg-gray-100 rounded-full cursor-pointer h-full'>
            <h3 className='text-xs font-bold'>Check in</h3>
            <p className='text-sm text-gray-600'>Add dates</p>
          </div>
          
          <div className='flex flex-col pl-6 justify-center hover:bg-gray-100 rounded-full cursor-pointer h-full'>
            <h3 className='text-xs font-bold'>Check out</h3>
            <p className='text-sm text-gray-600'>Add dates</p>
          </div>
          
          <div className='flex items-center pl-6 hover:bg-gray-100 rounded-full cursor-pointer h-full'>
            <div className='flex flex-col flex-grow'>
              <h3 className='text-xs font-bold'>Guests</h3>
              <p className='text-sm text-gray-600'>Add guests</p>
            </div>
            <SearchIcon className='hidden md:inline-flex h-12 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className='hidden md:flex space-x-4 items-center justify-end col-start-5 col-end-7'>
        <p className={`hidden md:inline whitespace-nowrap ${fillHeader ? 'text-gray-500' : 'text-gray-300'}cursor-pointer hover:shadow-xl`}>
          Become a host
        </p>

        <GlobeAltIcon className={`${fillHeader ? 'text-gray-500' : 'text-gray-300'} h-7 hover:shadow-xl cursor-pointer`} />

        <div className={`flex items-center space-x-2 border p-2 rounded-full bg-gray-100 ${fillHeader ? 'border-gray-300' : 'border-transparent'}hover:shadow-2xl cursor-pointer`}>
          <MenuIcon className='h-5 text-gray-500' />
          <UserCircleIcon className='h-6 text-gray-500' />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-6 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            rangeColors={["#fd5b61"]}
            onChange={handlePicker}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-6" />
            <input
              type="number"
              className="outline-none pl-2 w-12 text-lg text-red-400"
              value={noOfGuests}
              min={1}
              onChange={({ target }) => setNoOfGuests(target.value)}
            />
          </div>
          <div className="flex items-center">
            <button className="flex-grow bg-white text-red-400 border-b-2 rounded-full hover:bg-red-400 hover:text-white hover:shadow-lg transition-shadow duration-100 ease-out active:bg-red-400 active:text-white" onClick={() => setSearchInput("")}>
              Cancel
            </button>
            <button className="text-red-400 flex-grow bg-gray-50 border-b-2 rounded-full hover:bg-red-400 hover:text-white hover:shadow-lg transition-shadow duration-100 ease-out" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
