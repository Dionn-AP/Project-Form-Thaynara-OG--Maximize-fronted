import { ContainerForm } from '../components/ContainerForm';
import { ContainerPhoto } from '../components/ContainerPhoto';
import { useState } from 'react';
import { Footer } from '../components/Footer';
import { MenuBurger } from '../components/MenuBurger';
import { SideBar } from '../components/SideBar';

export function Contact() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='flex flex-col w-screen h-screen max-sm:justify-start justify-center items-center font-poppins'>
      <div className='max-sm:flex-col w-full h-full flex flex-row items-center max-sm:justify-start justify-between max-sm:p-0 px-4'>
        <div className="max-sm:w-full flex w-2/4 h-full flex-col items-center justify-center max-sm:mb-60">
          <MenuBurger />
          <ContainerPhoto />
        </div>
        <div className="flex max-sm:w-full w-2/4 max-sm:h-[70rem] h-full relative flex-col max-sm:items-center max-lg:items-center items-start max-lg:justify-start justify-center max-sm:mb-12 max-sm:p-0 max-md:p-0 mmax-lg:pl-0 pl-4">
          <SideBar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <div className="max-md:w-full max-md:px-0 max-sm:h-auto flex flex-col max-md:mt-2 max-lg:mt-12 max-xl:mt-0 mt-24">
            <ContainerForm
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          </div>
        </div>
        <div className='max-sm:flex hidden h-auto w-full'>
          <Footer />
        </div>
      </div>
      <div className='max-sm:hidden flex h-auto w-full'>
        <Footer />
      </div>
    </div>
  );
}
