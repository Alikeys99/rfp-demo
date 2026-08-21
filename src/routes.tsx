import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';

const EmergencyPage = lazy(() => import('./pages/EmergencyPage'));
const OHSPage = lazy(() => import('./pages/OHSPage'));
const MedicalPage = lazy(() => import('./pages/MedicalPage'));
const SurgicalPage = lazy(() => import('./pages/SurgicalPage'));
const IntegrationDemoPage = lazy(() => import('./pages/IntegrationDemoPage'));
const PatientDetail = lazy(() => import('./features/dashboard/PatientDetail'));
const ServerQueueAdmin = lazy(() => import('./features/admin/ServerQueueAdmin'));

const LoadingFallback = () => <div className="loading">Loading...</div>;

export const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/home',
        element: <Dashboard />,
      },
      {
        path: '/emergency',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <EmergencyPage />
          </Suspense>
        ),
      },
      {
        path: '/ohs',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <OHSPage />
          </Suspense>
        ),
      },
      {
        path: '/medical',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MedicalPage />
          </Suspense>
        ),
      },
      {
        path: '/surgical',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <SurgicalPage />
          </Suspense>
        ),
      },
      {
        path: '/integration-demo',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <IntegrationDemoPage />
          </Suspense>
        ),
      },
      {
        path: '/patient/:id',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PatientDetail />
          </Suspense>
        ),
      },
      {
        path: '/admin',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ServerQueueAdmin />
          </Suspense>
        ),
      },
    ],
  },
];