import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/common/Layout';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { TechStackPage } from './pages/TechStackPage';
import { TeamPage } from './pages/TeamPage';
import { CommunityPage } from './pages/CommunityPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="tech" element={<TechStackPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Catch-all → home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
