import DefaultLayout from '@/components/layouts/DefaultLayout'
import PrivateLayout, {
  loader as PrivateLoader,
} from '@/components/layouts/PrivateLayout'
import { createBrowserRouter } from 'react-router-dom'

//Auth Pages
import AuthLayout from '@pages/auth'
import Login from '@pages/auth/login'

//Home Page
import Home from '@pages/home'
import Apartment from '@pages/admin/apartment'
import Package from '@pages/user/package'

//Error page
import NotFound from '@pages/404'
import ToastLayout from '@/components/layouts/ToastLayout'
export const route = createBrowserRouter([
  {
    path: '/',
    element: <ToastLayout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <PrivateLayout />,
        loader: PrivateLoader,
        children: [
          {
            element: <DefaultLayout />,
            children: [
              {
                index: true,
                element: <Home />,
              },
              {
                path: '/apartment',
                element: <Apartment />,
                children: [
                  {
                    path: ':id',
                    element: <Apartment />,
                  },
                ],
              },
              {
                path: '/package',
                element: <Package />,
                children: [
                  {
                    path: ':id',
                    element: <Package />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: '/login',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
