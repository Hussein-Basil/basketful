import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
