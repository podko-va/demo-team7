import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, CheckCircle, XCircle, Users } from 'lucide-react';

const AltHomePage = () => {
  const { user } = useAuth();
  
  const [activeTab, setActiveTab] = useState('upcoming'); 

  const userEvents = {
    upcoming: [
      {
        id: 1,
        title: "JavaScript Conference 2025",
        category: "Technology",
        date: "2025-03-15",
        time: "10:00 AM",
        location: "Tech Hub, New York",
        participants: 250,
        maxParticipants: 300,
        description: "The largest JavaScript conference in the US.",
        imageUrl: "/images/tech-conferences.jpg",
        status: "upcoming"
      }
    ],
    past: [
      {
        id: 2,
        title: "React Workshop 2024",
        category: "Technology",
        date: "2024-12-15",
        time: "2:00 PM",
        location: "Dev Center, Boston",
        participants: 150,
        maxParticipants: 150,
        description: "Hands-on React development workshop.",
        imageUrl: "/images/design-workshop.jpg",
        status: "completed"
      }
    ],
    saved: [
      {
        id: 3,
        title: "UX Design Summit",
        category: "Design",
        date: "2025-04-20",
        time: "9:00 AM",
        location: "Design Hub, Seattle",
        participants: 180,
        maxParticipants: 200,
        description: "Annual UX design conference.",
        imageUrl: "/images/startup.jpg",
        status: "saved"
      }
    ]
  };

  const statusColors = {
    upcoming: "bg-green-500",
    completed: "bg-blue-500",
    saved: "bg-purple-500"
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming': return <Clock className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'saved': return <XCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Event Platform</h1>
        <p className="text-gray-600">Please login to see your personalized dashboard</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>

      {/* Navigation Tabs */}
      <div className="flex gap-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
        {[
          { id: 'upcoming', label: 'Upcoming', count: userEvents.upcoming.length },
          { id: 'saved', label: 'Saved', count: userEvents.saved.length },
          { id: 'past', label: 'Past', count: userEvents.past.length }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${activeTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-2 gap-6">
        {userEvents[activeTab].map(event => (
          <Link key={event.id} to={`/demo-event`} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 group">
            <div className="relative h-48">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                {event.category}
              </span>
              <span className={`absolute top-4 right-4 px-3 py-1 text-white text-sm rounded-full flex items-center gap-2 ${statusColors[event.status]}`}>
                {getStatusIcon(event.status)}
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric'
                  })} at {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {event.participants}/{event.maxParticipants} participants
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AltHomePage;
