import { Link } from 'react-router';
import IKImage from '../image/image';
import './leftBar.css';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <IKImage src="/general/logo.png" alt="" className="logo" />
        </Link>
        <Link to="/" className="menuIcon">
          <IKImage src="/general/home.svg" alt="" />
        </Link>
        <Link to="/create" className="menuIcon">
          <IKImage src="/general/create.svg" alt="" />
        </Link>
        <Link to="/" className="menuIcon">
          <IKImage src="/general/updates.svg" alt="" />
        </Link>
        <Link to="/" className="menuIcon">
          <IKImage src="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link to="/" className="menuIcon">
        <IKImage src="/general/settings.svg" alt="" />
      </Link>
    </div>
  );
};

export default LeftBar;
