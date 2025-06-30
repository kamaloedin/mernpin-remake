import './profilePage.css';
import IKImage from '../../components/image/image';
import Gallery from '../../components/gallery/gallery';
import { useState } from 'react';
import Collections from '../../components/collections/collections';

const ProfilePage = () => {
  const [type, setType] = useState('saved');
  return (
    <div className="profilePage">
      <div className="userDetails">
        <IKImage className="profileImage" src="/general/noAvatar.png" />
        <h1 className="name">John Doe</h1>
        <div className="userName">@johndoe</div>
        <div className="followCounter">0 following · 0 followers</div>
        <div className="profileInteractions">
          <IKImage src="/general/share.svg" />
          <div className="profileButtons">
            <button className="msgButton">Message</button>
            <button className="followBtn">Follow</button>
          </div>
          <IKImage src="/general/more.svg" />
        </div>
        <div className="profileOptions">
          <div className="profileOption">
            <span onClick={() => setType('created')} className={type === 'created' ? 'active' : ''}>
              Created
            </span>
          </div>
          <div className="profileOption">
            <span onClick={() => setType('saved')} className={type === 'saved' ? 'active' : ''}>
              Saved
            </span>
          </div>
        </div>
      </div>
      {type === 'created' ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
