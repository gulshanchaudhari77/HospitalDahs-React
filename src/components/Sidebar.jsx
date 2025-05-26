import React from 'react';
import { Activity, Calendar, Settings, MessageSquare, BarChart3 } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: Activity, active: true },
  { name: 'History', icon: Activity },
  { name: 'Calendar', icon: Calendar },
  { name: 'Appointments', icon: Calendar },
  { name: 'Statistics', icon: BarChart3 },
  { name: 'Tests', icon: Activity },
  { name: 'Chat', icon: MessageSquare },
  { name: 'Support', icon: MessageSquare },
  { name: 'Settings', icon: Settings }
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-100 min-h-screen">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          General
        </h2>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
