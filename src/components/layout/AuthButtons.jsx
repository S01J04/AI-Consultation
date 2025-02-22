import React from 'react';
import { useSelector } from 'react-redux';
import { User } from 'lucide-react';

const AuthButtons = () => {
  const user = useSelector(state => state.user.currentUser);

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{user.name}</span>
        <img
          src={user.avatar}
          alt={user.name}
          className="w-8 h-8 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <button className="text-gray-600 hover:text-indigo-600">
        Sign In
      </button>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
        <User className="w-4 h-4" />
        Sign Up
      </button>
    </div>
  );
};

export default AuthButtons;