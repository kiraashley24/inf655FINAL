import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const LoginComp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/users/login', {
        username,
        password
      });
      console.log('Login successful:', response.data);
      // Reset the form
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-lg py-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 bg-gray-100"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 bg-gray-100"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign in
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-green-600 hover:text-green-800">
              Register here <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-green-600" />
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginComp;
