import { useEffect, useState } from 'react';
import './App.css';
import Navbar from '@/scenes/navbar';
import { SelectedPage } from '@/shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    //this removes it when they are on the page
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        // page={''}
      />
    </div>
  );
}

export default App;
