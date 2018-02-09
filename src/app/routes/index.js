import App from '../components/App';
import Index from '../components/Index';
import Blog from '../components/Blog';

export default [
  {
    component: App,
    childRoutes: [
      {
        exact: true,
        path: '/',
        component: Index
      },
      {
        exact: true,
        path: '/blog',
        component: Blog
      },
    ]
  },
];