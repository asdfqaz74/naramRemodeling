import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { navigationItems } from './navigation';
import RootLayout from '@/components/layouts/RootLayout';
import { HelmetProvider } from 'react-helmet-async';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: navigationItems,
    errorElement: '에러입니다', //error 페이지 나중에 추가
  },
];

const router = createBrowserRouter(routes);

function Exercise() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default Exercise;
