import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  Clock,
  DollarSign,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

const EventDetailPage = () => {
  const [event] = useState({
    id: 1,
    title: "JavaScript Conference 2025",
    category: "Technology",
    date: "2025-03-15",
    time: "10:00 AM",
    endTime: "6:00 PM",
    location: "Tech Hub, New York",
    address: "123 Tech Street, NY 10001",
    participants: 250,
    maxParticipants: 300,
    description: `Join us for the largest JavaScript conference in the US. Leading experts will explore new technologies and development trends.

    What to expect:
    • Latest JavaScript frameworks and tools
    • Best practices in modern web development
    • Networking with industry professionals
    • Interactive workshops and code sessions`,
    imageUrl: "/images/tech-conferences.jpg",
    price: 299,
    status: "upcoming",
    organizer: {
      name: "Tech Events Inc",
      logo: "/api/placeholder/64/64"
    },
    schedule: [
      {
        time: "9:00 AM",
        title: "Registration & Coffee",
        duration: "1 hour"
      },
      {
        time: "10:00 AM",
        title: "Keynote: Future of JavaScript",
        duration: "1.5 hours"
      },
      {
        time: "11:30 AM",
        title: "Workshop: Modern React Patterns",
        duration: "2 hours"
      }
    ]
  });

  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.history.back()} 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                Back
              </button>
              <div className="h-6 w-px bg-gray-200" />
              <span className="text-sm text-gray-600">Events / {event.category} / {event.title}</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bookmark className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm mb-4">
                  {event.category}
                </span>
                <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
                <div className="flex items-center gap-4 text-gray-300">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {event.time} - {event.endTime}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-2xl font-bold">${event.price}</span>
                <button 
                  onClick={() => setIsRegistered(!isRegistered)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    isRegistered 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isRegistered ? 'Registered' : 'Register Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-600 whitespace-pre-line">{event.description}</p>
            </section>

            {/* Schedule Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Event Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex-shrink-0 w-24 text-sm text-gray-600">
                      {item.time}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <span className="text-sm text-gray-600">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b">
                <img
                  src={event.organizer.logo}
                  alt={event.organizer.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium">Organized by</h3>
                  <p className="text-sm text-gray-600">{event.organizer.name}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-gray-600">{event.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Participants</h3>
                    <p className="text-sm text-gray-600">
                      {event.participants} of {event.maxParticipants} registered
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Price</h3>
                    <p className="text-sm text-gray-600">${event.price} per person</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Visit Event Website
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Contact Organizer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;