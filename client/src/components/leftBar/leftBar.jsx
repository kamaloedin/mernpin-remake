import IKImage from '../image/image';
import './leftBar.css';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <IKImage src="/general/logo.png" alt="" className="logo" />
        </a>
        <a href="/" className="menuIcon">
          <IKImage src="/general/home.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <IKImage src="/general/create.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <IKImage src="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <IKImage src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <IKImage src="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
