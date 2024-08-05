import logo from './logo.svg';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';

import { TODOList } from './components/FirstPage';
function App() {
  return (
    <TODOList/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<TODOList />} />
    //     {/* <Route path="/scheduledPost" element={<ScheduledPost />} /> */}
    //   </Routes>
    // </Router>
    
  );
}

export default App;
