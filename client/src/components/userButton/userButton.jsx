import { useState } from 'react';
import './userButton.css';

const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = true;
  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <div onClick={() => setIsOpen((prev) => setIsOpen(!prev))}>
        <img src="/general/arrow.svg" alt="" className="arrow" />
      </div>
      {isOpen && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <div className="loginLink">Login / Sign Up</div>
  );
};

export default UserButton;
