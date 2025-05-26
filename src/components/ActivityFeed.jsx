import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ActivityFeed = () => {
  const weeklyData = [
    { day: 'Mon', appointments: 2 },
    { day: 'Tue', appointments: 1 },
    { day: 'Wed', appointments: 3 },
    { day: 'Thu', appointments: 4 },
    { day: 'Fri', appointments: 2 },
    { day: 'Sat', appointments: 1 },
    { day: 'Sun', appointments: 0 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Activity</h3>
      <p className="text-sm text-gray-600 mb-6">3 appointments on this week</p>
      
      {/* Recharts BarChart */}
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="appointments" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">This Week</span>
          <span className="font-medium text-gray-800">13 Total</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed