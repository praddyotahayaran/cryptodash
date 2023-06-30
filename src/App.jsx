import './App.css'
import Transaction from './Pages/Transaction/Transaction';
import Support from './Pages/Support/Support';
import Dashboard from './Pages/Dashboard/Dashboard'
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </HashRouter>
  )
}


export default App