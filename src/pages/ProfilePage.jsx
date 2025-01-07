import React, { useState } from 'react';
import { Camera, Calendar, Users, Star, Edit, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfilePage = () => {
  const [userStats] = useState({
    eventsAttended: 15,
    eventsCreated: 3,
    totalParticipants: 127,
    upcomingEvents: 2
  });

  const [createdEvents] = useState([
    {
      id: 1,
      title: "Programming Workshop",
      date: "2025-03-15",
      participants: 45,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "2025-03-20",
      participants: 32,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Developers Conference",
      date: "2025-02-28",
      participants: 50,
      status: "past"
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="/api/placeholder/128/128"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
              <Camera className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold mb-2">John Smith</h1>
                <p className="text-gray-600">john@example.com</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <Edit className="h-4 w-4" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Events Attended</p>
                <p className="text-2xl font-bold">{userStats.eventsAttended}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Events Created</p>
                <p className="text-2xl font-bold">{userStats.eventsCreated}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Participants</p>
                <p className="text-2xl font-bold">{userStats.totalParticipants}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Upcoming Events</p>
                <p className="text-2xl font-bold">{userStats.upcomingEvents}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Created Events */}
      <Card>
        <CardHeader>
          <CardTitle>Created Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {createdEvents.map((event) => (
              <div key={event.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(event.date).toLocaleDateString()} • {event.participants} participants
                    </p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;