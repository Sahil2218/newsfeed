import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/about'; 
import Weather from './components/Weather/Weather'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 15;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Navbar />

          <LoadingBar
            color="#FF0000"
            height={4}
            progress={progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="General" />} />
            <Route path="/Business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="Business" />} />
            <Route path="/Entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
            <Route path="/General" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="General" />} />
            <Route path="/Health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="Health" />} />
            <Route path="/Science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="Science" />} />
            <Route path="/Sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="Sports" />} />
            <Route path="/Technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="Technology" />} />
            <Route path="/weather" element={<Weather/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
