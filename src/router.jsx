import { Navigate, useRoutes } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import DashBoardPage from './pages/app/DashBoard';
import SignupPage from './pages/auth/signupPage';
import NotfoundPage from './pages/notfound';
import UserPage from './pages/app/userPage';
import LandingPage from './pages/landing';

const AppRouter = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <LandingPage/> ,
        },
        {
            path: '/dashboard',
            element: <RootLayout />,
            children: [
              { element: <Navigate to={"/dashboard/app"} />, index: true },
              {
                path: "app",
                element: <DashBoardPage />,
              },
              {
                path: "users",
                element: <UserPage />,
              },
            //   { path: "tasks", element: <DashboardTasks /> },
            ],
        },
        { path: "/signup", element: <SignupPage /> },
        { path: "*", element: <NotfoundPage /> },

    ]);
  return routes;
}

export default AppRouter