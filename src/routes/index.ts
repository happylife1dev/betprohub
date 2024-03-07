import { lazy } from 'react';


const Home = lazy(() => import('../pages/Dashboard/home'));
const Statement = lazy(() => import('../pages/MyAccount/Statement'));



const coreRoutes = [
  {
    path: '/home',
    title: 'Home',
    component: Home,
  },
  {
    path: '/statement',
    title: 'Statement',
    component: Statement,
  },
];

const routes = [...coreRoutes];
export default routes;
