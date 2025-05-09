import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/main.scss';

// Lazy load pages for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      {/* Navbar is always visible */}
      <Navbar />
      {/* Suspense shows fallback while lazy-loaded pages load */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App; 