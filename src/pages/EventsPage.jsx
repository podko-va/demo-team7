import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "2025-03-15",
      location: "Convention Center",
      participants: 120,
      image: "/images/tech-conferences.jpg",
      category: "Technology"
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "2025-03-20",
      location: "Innovation Hub",
      participants: 30,
      image: "/images/design-workshop.jpg",
      category: "Design"
    },
    {
      id: 3,
      title: "Startup Meetup",
      date: "2025-03-25",
      location: "Business Center",
      participants: 75,
      image: "/images/startup.jpg",
      category: "Business"
    }
  ];

  return (
    <div className="flex gap-8">
      <div className="w-64 flex-shrink-0">
        <Card className="sticky top-24">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Filters</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">Clear</button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="space-y-2">
                  {['All Events', 'Technology', 'Design', 'Business', 'Art', 'Music'].map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <select className="w-full p-2 rounded border">
                  <option>Any date</option>
                  <option>Today</option>
                  <option>This week</option>
                  <option>This month</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select className="w-full p-2 rounded border">
                  <option>All locations</option>
                  <option>Convention Center</option>
                  <option>Innovation Hub</option>
                  <option>Business Center</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex-1 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Upcoming Events</h1>
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <Link key={event.id} to={`/demo-event/`}>
              <Card key={event.id}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="pt-4">
                  <h3 className="font-medium text-lg mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {event.participants} participants
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;