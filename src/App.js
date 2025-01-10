import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BlogPage />} />
        <Route path='/blog/:slug' element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
