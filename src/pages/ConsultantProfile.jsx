import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Calendar, MessageSquare } from 'lucide-react';
import { mockConsultants } from '../mockData';

const ConsultantProfile = () => {
  const { id } = useParams();
  const consultant = mockConsultants.find(c => c.id === id) || mockConsultants[0];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="relative h-48 bg-indigo-600">
          <div className="absolute -bottom-16 left-8">
            <img
              src={consultant.avatar}
              alt={consultant.name}
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-8 pb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{consultant.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-gray-600">{consultant.rating} rating</span>
              </div>
            </div>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Book Consultation
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h2 className="text-lg font-semibold mb-4">About</h2>
              <p className="text-gray-600 mb-6">{consultant.bio}</p>

              <h2 className="text-lg font-semibold mb-4">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {consultant.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))} </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Availability</h2>
              <div className="space-y-4">
                {consultant.availability.map((slot, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <div>
                      <div className="font-medium">
                        {new Date(slot.start).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-600">
                        {new Date(slot.start).toLocaleTimeString()} - {new Date(slot.end).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Session Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    <div>
                      <div className="font-medium">60 minutes per session</div>
                      <div className="text-sm text-gray-600">Standard consultation length</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-indigo-600" />
                    <div>
                      <div className="font-medium">Video or Voice Call</div>
                      <div className="text-sm text-gray-600">Choose your preferred format</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfile;