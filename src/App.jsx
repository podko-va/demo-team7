import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import CreateEventPage from './pages/CreateEventPage';
import { AuthProvider } from './contexts/AuthContext';
import DemoEventDetail from './pages/EventDetailPage'

const App = () => {
  return (
    <AuthProvider>
      <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create-event" element={<CreateEventPage />} />
            <Route path="/demo-event" element={<DemoEventDetail />} />
          </Routes>
        </Layout>
    </AuthProvider>
  );
};

export default App;