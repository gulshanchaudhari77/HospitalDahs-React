import React from 'react';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import Sidebar from './components/Sidebar';


const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
};

export default Index;
