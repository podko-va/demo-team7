import React, { useEffect, useState, useContext } from "react";
import { EventContext } from "../../contexts/EventContext";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { format } from "date-fns";

const ManageEvents = () => {
  const { getAllEvents, deleteEvent } = useContext(EventContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getAllEvents();
        setEvents(fetchedEvents || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [getAllEvents]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteEvent(id);
        setEvents(events.filter((event) => event.id !== id));
        alert("Event deleted successfully!");
      } catch (error) {
        console.error("Error deleting event:", error);
        alert("Failed to delete event.");
      }
    }
  };

  const columns = [
    { name: "Event Name", selector: (row) => row.name, sortable: true },
    { name: "Event Description", selector: (row) => row.description, sortable: true },
    { name: "Location", selector: (row) => row.location, sortable: true },
    { name: "Capacity", selector: (row) => row.capacity, sortable: true },
    { name: "Event Date", selector: (row) => format(new Date(row.date), "MM/dd/yyyy h:mm a"), sortable: true },
    { name: "Event Type", selector: (row) => row.event_type, sortable: true },
    { name: "Event Status", selector: (row) => row.status, sortable: true },
    { name: "Actions", cell: (row) => (
        <>
          <Link
            to={`/update-event/${row.id}`}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(row.id)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  if (loading) return <div>Loading events...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Events</h1>
      <Link
          to="/create-event"
          className="inline-block px-4 py-2 mb-6 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
          style={{ whiteSpace: "nowrap" }} 
      >
          Create New Event
      </Link>


      <DataTable
        title="All Events"
        columns={columns}
        data={events}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default ManageEvents;
