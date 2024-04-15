import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewForm from './components/NewForm.jsx';
import Details from './pages/Details.jsx';
import { store } from './store/index.js'
import { Provider } from 'react-redux';
import TodosPage from './pages/TodosPage.jsx';
import PostsPage from './pages/PostsPage.jsx';
import OrderForm from './pages/OrderForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Произошла ошибка</p>,
  },
  {
    path: "/categories",
    element: <NewForm />
  },
  {
    path: "/restaurants/:id",
    element: <Details />
  },
  {
    path: "/todos",
    element: <TodosPage />
  },
  {
    path: "/posts",
    element: <PostsPage />
  },
  {
    path: "/form",
    element: <OrderForm />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
