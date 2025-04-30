import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import HomePage from './pages/HomePage';
import BenefitsPage from './pages/BenefitsPage';
import ContactForm from './components/ContactForm';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout><Outlet /></Layout>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={
        <Suspense fallback={<LoadingSpinner />}>
          <AboutPage />
        </Suspense>
      } />
      <Route path="/services" element={
        <Suspense fallback={<LoadingSpinner />}>
          <ServicesPage />
        </Suspense>
      } />
      <Route path="/benefits" element={<BenefitsPage />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="*" element={
        <Suspense fallback={<LoadingSpinner />}>
          <NotFoundPage />
        </Suspense>
      } />
    </Route>
  ),
  {
    future: {
      // @ts-ignore - These flags will be added in React Router v7
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50">
          <RouterProvider router={router} />
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;