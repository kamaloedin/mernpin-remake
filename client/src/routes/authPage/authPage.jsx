import './authPage.css';
import Image from '../../components/image/image';
import { useState } from 'react';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  return (
    <div className="authPage">
      <div className="authContainer">
        <Image src="/general/logo.png" />
        <h1>{isRegister ? 'Create an account' : 'Login to your account'}</h1>
        {isRegister ? (
          <form key="register">
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Username" name="username" id="username" required />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input type="text" placeholder="Name" name="displayName" id="displayName" required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Email" name="email" id="email" required />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="Password" name="password" id="password" required />
            </div>
            <button type="submit">Register</button>
            <p>
              Already have an account? <b onClick={() => setIsRegister(false)}>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="login">
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Email" name="email" id="email" required />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="Password" name="password" id="password" required />
            </div>
            <button type="submit">Login</button>
            <p>
              Don&apos;t have an account? <b onClick={() => setIsRegister(true)}>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
