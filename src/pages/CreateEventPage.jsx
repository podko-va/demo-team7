import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const CreateEventPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create New Event</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-medium">Event Image</label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                <div className="flex flex-col items-center">
                  <Camera className="h-8 w-8 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-600">Upload event image</span>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Event Title</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter event title"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Date</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Time</label>
                <input
                  type="time"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter event location"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Description</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows="4"
                placeholder="Enter event description"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create Event
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateEventPage;