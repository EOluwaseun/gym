// import { useState } from 'react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import ActionButton from '@/shared/ActionButton';
import { XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
  isTopOfPage: boolean;
  //   page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void; //set to function
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  const flexBetween = 'flex items-center justify-between';
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)'); //desktop
  const navBarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow-xl';

  return (
    <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
      {/* 5/6 means of 6 of the parent div, then center it in d middle position */}
      <div className={`${navBarBackground} ${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img alt="logo" src={Logo} />

          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign up</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a Member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}

          <div className={`flex flex-col gap-10 ml-[33%] text-2xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
