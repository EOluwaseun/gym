// tsrafc
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// anytime you create some kind of props, you identify what type it is

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void; //set to function
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  // this convert all the links to lowerCase and removes extral spaces
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, '') as SelectedPage; // treat it as selectedpage enum

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage} ? 'text-primary-500 : ''
      transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
