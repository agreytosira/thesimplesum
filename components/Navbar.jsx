'use client';

import { RiArrowDownSLine, RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport } from '@/components/ui/navigation-menu';

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

  const contentTypes = [
    {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description: 'A modal dialog that interrupts the user with important content and expects a response.'
    },
    {
      title: 'Test',
      href: '/docs/primitives/test',
      description: 'A modal dialog that interrupts the user with important content and expects a response.'
    }
  ];

  const categories = [
    {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description: 'A modal dialog that interrupts the user with important content and expects a response.'
    },
    {
      title: 'Test',
      href: '/docs/primitives/test',
      description: 'A modal dialog that interrupts the user with important content and expects a response.'
    }
  ];

  const calculators = [
    {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description: 'A modal dialog that interrupts the user with important content and expects a response.'
    },
    {
      title: 'Test',
      href: '/docs/primitives/test',
      description: 'A modal dialog that interrupts the user with important content and expects a response.'
    }
  ];

  return (
    <header className='hidden md:block'>
      <div className='py-4 bg-[#f4f4f4]'>
        <div className='container flex items-center justify-between'>
          <div className='flex items-center gap-2 relative' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Image src={currentFlag} alt='Country Flag' width={24} height={24} />
            {currentCountry}
            <RiArrowDownSLine size={24} className={`transition-transform duration-300 ${showCountryDropdown ? 'rotate-180' : 'rotate-0'}`} />
            {showCountryDropdown && (
              <div className='py-8 absolute top-0 left-0 z-[50]'>
                <div className='bg-white shadow-md p-2 w-40 rounded-xl '>
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
      <Link href='/' className='container flex justify-center py-3'>
        <Image src='/navbar-ads.png' alt='Navbar Ads' className='w-[90%]' width={2200} height={160} />
      </Link>
      <div className='container px-0'>
        <div className='flex items-stretch'>
          <div className='flex items-center bg-white py-2 pl-8 rounded-l-[2rem] w-[85%] navbar-shadow z-10'>
            <Link className=' flex justify-center items-center px-2' href='/'>
              <Image src='/thesimplesum-logo.png' alt='TheSimpleSum Logo' className='w-[171px]' width={171} height={30} />
            </Link>
            <div className=' flex items-center justify-center w-full'>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href='/' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                        {categories.map((category) => (
                          <ListItem key={category.title} title={category.title} href={category.href}>
                            {category.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Content Type</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                        {contentTypes.map((contentType) => (
                          <ListItem key={contentType.title} title={contentType.title} href={contentType.href}>
                            {contentType.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Calculators</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                        {calculators.map((calculator) => (
                          <ListItem key={calculator.title} title={calculator.title} href={calculator.href}>
                            {calculator.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href='/about' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <button className='flex gap-2 items-center justify-center bg-secondary hover:bg-secondary-high h-auto rounded-r-[2rem] text-white w-[15%] z-10'>
            Search Here
            <Image src='/icon-search.svg' alt='Search Icon' width={34} height={34} />
          </button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white group', className)} {...props}>
          <div className=' leading-none font-semibold group-hover:text-tersier'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-foreground/50'>{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
