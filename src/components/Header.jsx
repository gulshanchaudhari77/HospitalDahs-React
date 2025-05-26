import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-blue-600">Healthcare.</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
        
        <div className="flex items-center space-x-3">
          <img
            src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-700 font-medium">Dr.Gulshan</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
