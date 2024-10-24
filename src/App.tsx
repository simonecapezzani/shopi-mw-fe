import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/Root/RootLayout';
import HomePage from './routes/Home/HomePage';
import CustomersPage from './routes/Customers/CustomersPage';
import ProductsPage from './routes/Products/ProductsPage';
import OrdersPage from './routes/Orders/OrdersPage';
import ErrorPage from './routes/ErrorPage';
import SettingsPage from './routes/Settings/SettingsPage';
import "./App.scss";

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { index: true, element: <HomePage /> },
      { path: '/customers', element: < CustomersPage /> },
      { path: '/products', element: < ProductsPage /> },
      { path: '/orders', element: < OrdersPage /> },
      { path: '/settings', element: < SettingsPage /> }
    ], errorElement: <ErrorPage />
  }
]
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;