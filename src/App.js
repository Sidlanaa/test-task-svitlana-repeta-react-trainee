import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TablePage from './components/TablePage/TablePage';
import { Routes, Route } from 'react-router';


const App = (props) => {
  return (
    <div className="appFront">
      <aside className="sidebar">
        <Navbar />
      </aside>
      <div className="contentBlock">
        <Routes path="/" element={<App />}>
          <Route exact path="home" element={<Home />} />
          <Route exact path="table" element={<TablePage />} />
        </Routes>
      </div>
    </div>
  );
};


export default App;
