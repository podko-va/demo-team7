import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';

const HomePage = () => {
  const { user } = useAuth();

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "2025-03-15",
      time: "10:00 AM",
      location: "Convention Center",
      type: "registered"
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "2025-03-20",
      time: "2:00 PM",
      location: "Innovation Hub",
      type: "created"
    }
  ];

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
      
      <Card>
        <CardHeader>
          <CardTitle>Your Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="text-sm text-gray-600 space-y-1 mt-1">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <span className={`text-sm px-2 py-1 rounded ${
                  event.type === 'created' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {event.type === 'created' ? 'Created' : 'Registered'}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;