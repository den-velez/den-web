"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const profileName = {
    name: "Dennis Velez",
    position: "Software Developer",
    email: "den@denvelez.com",
  };

  const buttonContactLabel = "Contact me";

  const headerItems = [
    {
      label: "About Me",
      link: "#about",
    },
    {
      label: "Experience",
      link: "#experience",
    },
    {
      label: "Tech Stack",
      link: "#stack",
    },
  ];

  const toogleMenu = () => {
    const currentState = openMenu;
    setOpenMenu(!currentState);
  };

  return (
    <header className='grid grid-cols-1 grid-rows-[50px_1fr] pb-2 bg-blueBrand'>
      <ul className='hidden md:flex md:justify-end md:items-center md:row-start-1 md:row-end-2  md:col-start-1 md:col-end-3 text-orangeBrand'>
        {headerItems.map((headerItem, key) => (
          <li key={key} className='mx-6 text-[25px] font-bold uppercase'>
            <a href={headerItem.link}>{headerItem.label}</a>
          </li>
        ))}
      </ul>
      <div className='md:row-start-2 md:row-end-3 p-1 w-[75%] flex flex-col justify-between bg-orangeBrand h-[47px] md:h-[100px] rounded-r-[15px] uppercase'>
        <h1 className='w-full pl-3 xl:pr-96 text-left text-blueBrand font-bold md:leading-[48px] xl:text-right'>
          {profileName.name}
        </h1>
        <h3 className='w-full pr-3 text-right text-white font-bold md:leading-[36px]'>
          {profileName.position}
        </h3>
      </div>
      <div className='pr-3 row-start-1 row-end-2 md:row-start-2 md:row-end-3 flex items-center justify-between'>
        <a
          className='px-3 md:py-4 flex justify-center items-center uppercase text-orangeBrand bg-grayBrand rounded-r-[10px] md:rounded-[10px] leading-4'
          href={`mailto: ${profileName.email}`}>
          <span>{buttonContactLabel}</span>
        </a>
        <div className='relative'>
          <button className='md:hidden' onClick={toogleMenu}>
            <Image
              src={"svgs/burguerMenu.svg"}
              alt='menu buttom'
              width={36}
              height={24}
            />
          </button>
          {openMenu && (
            <ul className='md:hidden absolute top-8 right-0 flex flex-col justify-center items-center bg-grayBrand rounded-l-[20px] w-[100px] h-[140px] text-orangeBrand'>
              {headerItems.map((headerItem, key) => (
                <li key={key} className='text-[12px] font-bold uppercase'>
                  <a href={headerItem.link}>{headerItem.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
