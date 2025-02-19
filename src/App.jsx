import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Routing/Layout';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Update from './Pages/Update';
import NotFound from './Pages/NotFound';
import { PostContextProvider } from './services/PostContextProvider';
import { ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'Create/',
          element: <Create />,
        },
        {
          path: 'Update/:id',
          element: <Update />,
        }
      ],
      errorElement: <NotFound />
    }
  ])

  return (
    <>
      <PostContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </PostContextProvider>
    </>
  )
}

export default App