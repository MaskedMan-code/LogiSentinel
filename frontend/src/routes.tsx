import { Navigate, createBrowserRouter } from 'react-router-dom'
import EnterpriseLayout from '@/layouts/EnterpriseLayout'
import DriverLayout from '@/layouts/DriverLayout'
import LoginPage from '@/pages/enterprise/LoginPage'
import DashboardPage from '@/pages/enterprise/DashboardPage'
import FleetHealthPage from '@/pages/enterprise/FleetHealthPage'
import AlertsPage from '@/pages/enterprise/AlertsPage'
import VehicleDetailPage from '@/pages/enterprise/VehicleDetailPage'
import ManualsPage from '@/pages/enterprise/ManualsPage'
import AiDiagnosticsPage from '@/pages/enterprise/AiDiagnosticsPage'
import PrivacyReviewPage from '@/pages/enterprise/PrivacyReviewPage'
import DriverActivityPage from '@/pages/enterprise/DriverActivityPage'
import ReportsPage from '@/pages/enterprise/ReportsPage'
import SettingsPage from '@/pages/enterprise/SettingsPage'
import DriverLoginPage from '@/pages/driver/DriverLoginPage'
import RouteSummaryPage from '@/pages/driver/RouteSummaryPage'
import VehicleAssignedPage from '@/pages/driver/VehicleAssignedPage'
import ReportIssuePage from '@/pages/driver/ReportIssuePage'
import ManualLookupPage from '@/pages/driver/ManualLookupPage'
import DriverAssistantPage from '@/pages/driver/DriverAssistantPage'
import ServiceChecklistPage from '@/pages/driver/ServiceChecklistPage'
import ConsentPage from '@/pages/driver/ConsentPage'
import NotificationsPage from '@/pages/driver/NotificationsPage'
import OfflinePage from '@/pages/driver/OfflinePage'

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/enterprise" replace /> },
  { path: '/enterprise/login', element: <LoginPage /> },
  {
    path: '/enterprise',
    element: <EnterpriseLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'fleet', element: <FleetHealthPage /> },
      { path: 'alerts', element: <AlertsPage /> },
      { path: 'vehicles', element: <VehicleDetailPage /> },
      { path: 'manuals', element: <ManualsPage /> },
      { path: 'ai', element: <AiDiagnosticsPage /> },
      { path: 'privacy', element: <PrivacyReviewPage /> },
      { path: 'drivers', element: <DriverActivityPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  { path: '/driver/login', element: <DriverLoginPage /> },
  {
    path: '/driver',
    element: <DriverLayout />,
    children: [
      { index: true, element: <RouteSummaryPage /> },
      { path: 'vehicle', element: <VehicleAssignedPage /> },
      { path: 'report', element: <ReportIssuePage /> },
      { path: 'manuals', element: <ManualLookupPage /> },
      { path: 'assistant', element: <DriverAssistantPage /> },
      { path: 'checklist', element: <ServiceChecklistPage /> },
      { path: 'consent', element: <ConsentPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'offline', element: <OfflinePage /> },
    ],
  },
])
