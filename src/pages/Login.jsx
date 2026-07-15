import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(email, password);
    if (user.isAdmin) {
      navigate('/admin');
    } else {
      navigate('/catalog');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 pt-20">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 uppercase tracking-widest">
            Enter the Kingdom
          </h2>
          <p className="mt-4 text-center text-sm text-gray-600">
            Sign in to view our exclusive catalog. <br/>
            <span className="text-xs text-gray-400 mt-2 block">(Hint: Use <strong>admin@kingdomwear.com</strong> for Admin dashboard)</span>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-sm focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-sm focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-sm text-white bg-black hover:bg-gray-800 focus:outline-none uppercase tracking-widest transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
