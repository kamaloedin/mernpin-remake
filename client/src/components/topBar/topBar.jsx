import IKImage from '../image/image';
import UserButton from '../userButton/userButton';
import './topBar.css';

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="search">
        <IKImage src="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <UserButton />
    </div>
  );
};

export default TopBar;
