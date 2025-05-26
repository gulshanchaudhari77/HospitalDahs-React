import React from 'react';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import skeletonImage from '../assets/img.webp';

const healthIndicators = [
  {
    name: 'Heart',
    status: 'healthy',
    color: 'green',
    position: { top: '30%', left: '50%' },
    icon: null,
    progress: 85,
    bg: 'bg-green-50',
  },
  {
    name: 'Lungs',
    status: 'warning',
    color: 'red',
    position: { top: '25%', left: '45%' },
    icon: null,
    progress: 40,
    bg: 'bg-red-50',
  },
  {
    name: 'Teeth',
    status: 'healthy',
    color: 'green',
    position: { top: '10%', left: '52%' },
    icon: <MdOutlineEmojiEmotions className="text-yellow-500" />,
    progress: 90,
    bg: 'bg-yellow-50',
  },
  {
    name: 'Bone',
    status: 'healthy',
    color: 'green',
    position: { top: '65%', left: '50%' },
    icon: null,
    progress: 78,
    bg: 'bg-blue-50',
  },
];

const AnatomySection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md ">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Health Overview</h2>

      {/* Skeleton Image */}
      <div className="relative w-64 h-96 mx-auto mb-8">
        <img
          src={skeletonImage}
          alt="Human Skeleton"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Indicators */}
      <div className="space-y-4">
        {healthIndicators.map((indicator, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${indicator.bg} shadow-sm`}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <span
                  className={`w-3 h-3 rounded-full ${
                    indicator.color === 'green' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></span>
                {indicator.icon && <span className="text-lg">{indicator.icon}</span>}
                <span className="font-medium text-gray-800">{indicator.name}</span>
              </div>
              <span
                className={`text-sm font-medium ${
                  indicator.status === 'healthy' ? 'text-green-700' : 'text-red-600'
                }`}
              >
                {indicator.status === 'healthy' ? 'Normal Functioning' : 'Needs Immediate Attention'}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  indicator.color === 'green' ? 'bg-green-500' : 'bg-red-500'
                }`}
                style={{ width: `${indicator.progress}%` }}
              ></div>
            </div>

            {/* Progress label */}
            <div className="text-right text-xs mt-1 text-gray-600">
              {indicator.progress}% Health Efficiency
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
