import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column  */}
        <div className="lg:col-span-1">
          <AnatomySection />
        </div>
        
        {/* Middle Column  */}
        <div className="lg:col-span-1">
          <CalendarView />
        </div>
        
        {/* Right Column  */}
        <div className="lg:col-span-1 space-y-6">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;