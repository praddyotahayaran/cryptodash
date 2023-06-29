import './App.css'
import Transaction from './Pages/Transaction/Transaction';
import Support from './Pages/Support/Support';
import Dashboard from './Pages/Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/cryptodash/",
    element: <Dashboard />,
  },
  {
    path: "/cryptodash/transaction",
    element: <Transaction />,
  },
  {
    path: "/cryptodash/support",
    element: <Support />
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App