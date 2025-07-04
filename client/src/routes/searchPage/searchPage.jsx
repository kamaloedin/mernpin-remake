import { useSearchParams } from 'react-router';
import './searchPage.css';
import Gallery from '../../components/gallery/gallery';

const SearchPage = () => {
  let [searchParams] = useSearchParams();

  const search = searchParams.get('search');

  return <Gallery search={search} />;
};

export default SearchPage;
