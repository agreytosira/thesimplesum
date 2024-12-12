'use client';

import { RiArrowDownSLine, RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [currentCountry, setCurrentCountry] = useState('SINGAPORE');
  const [currentFlag, setCurrentFlag] = useState('/singapore-flag.png');

  const handleMouseOver = () => {
    setShowCountryDropdown(true);
  };

  const handleMouseOut = () => {
    setShowCountryDropdown(false);
  };

  return (
    <header>
      <div className='py-4 text-primary-normal bg-[#f4f4f4]'>
        <div className='container flex items-center justify-between'>
          <div className='flex items-center gap-2 relative' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Image src={currentFlag} alt='Country Flag' width={24} height={24} />
            {currentCountry}
            <RiArrowDownSLine size={24} className={`transition-transform duration-300 ${showCountryDropdown ? 'rotate-180' : 'rotate-0'}`} />
            {showCountryDropdown && (
              <div className='py-8 absolute top-0 left-0 '>
                <div className='bg-white shadow-md p-2 w-40 rounded-xl'>
                  <ul>
                    <button
                      onClick={() => {
                        setCurrentCountry('SINGAPORE');
                        setCurrentFlag('/flag/singapore-flag.png');
                      }}
                      className='p-2 hover:bg-primary-normal hover:text-tersier-normal cursor-pointer flex w-full rounded-sm'>
                      SINGAPORE
                    </button>
                    <button
                      onClick={() => {
                        setCurrentCountry('MALAYSIA');
                        setCurrentFlag('/flag/malaysia-flag.png');
                      }}
                      className='p-2 hover:bg-primary-normal hover:text-tersier-normal cursor-pointer flex w-full rounded-sm'>
                      MALAYSIA
                    </button>
                    <button
                      onClick={() => {
                        setCurrentCountry('BRUNEI');
                        setCurrentFlag('/flag/brunei-flag.png');
                      }}
                      className='p-2 hover:bg-primary-normal hover:text-tersier-normal cursor-pointer flex w-full rounded-sm'>
                      BRUNEI
                    </button>
                    <button
                      onClick={() => {
                        setCurrentCountry('PHILIPPINES');
                        setCurrentFlag('/flag/philippines-flag.png');
                      }}
                      className='p-2 hover:bg-primary-normal hover:text-tersier-normal cursor-pointer flex w-full rounded-sm'>
                      PHILIPPINES
                    </button>
                    <button
                      onClick={() => {
                        setCurrentCountry('INDONESIA');
                        setCurrentFlag('/flag/indonesia-flag.png');
                      }}
                      className='p-2 hover:bg-primary-normal hover:text-tersier-normal cursor-pointer flex w-full rounded-sm'>
                      INDONESIA
                    </button>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className='flex items-center gap-6'>
            <Link href='/' className='px-2'>
              SIGN IN
            </Link>
            <Link href='/' className='px-2'>
              SUBSCRIBE
            </Link>
            <ul className='flex items-center gap-6'>
              <li>
                <Link href='/'>
                  <RiFacebookFill size={24} />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <RiTwitterFill size={24} />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <RiLinkedinFill size={24} />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <RiInstagramFill size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container flex justify-center py-3'>
        <Image src='/navbar-ads.png' alt='Navbar Ads' className='w-[90%]' width={2200} height={160} />
      </div>
    </header>
  );
}
