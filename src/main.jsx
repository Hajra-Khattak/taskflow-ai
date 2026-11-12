import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
import './services/firebase'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { TimeZoneProvider } from './context/TimeZoneContext'
import Layout from './Layout'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Spinner from './components/Spinner/Spinner'

// Loaded on demand so the landing page doesn't ship the dashboard + charts
const Login = lazy(() => import('./pages/Login/Login'))
const SignUp = lazy(() => import('./pages/SignUp/Signup'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const AddTask = lazy(() => import('./pages/Habit/AddTask'))
const DashboardLayout = lazy(() => import('./pages/Dashboard/DashboardLayout'))
const DashboardHome = lazy(() => import('./pages/Dashboard/DashboardHome'))
const TaskPage = lazy(() => import('./pages/Dashboard/TasksPage'))
const HabitsPage = lazy(() => import('./pages/Dashboard/HabitsPage'))
const StatsPage = lazy(() => import('./pages/Dashboard/StatsPage'))
const SearchPage = lazy(() => import('./pages/Dashboard/SearchPage'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="habits" element={<AddTask />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="habits" element={<HabitsPage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
)

const pageFallback = (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 text-blue-600 dark:text-blue-400">
    <Spinner size="lg" />
  </div>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <TimeZoneProvider>
          <Suspense fallback={pageFallback}>
            <RouterProvider router={router} />
          </Suspense>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-fg)',
                border: '1px solid var(--toast-border)',
              },
            }}
          />
        </TimeZoneProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)


