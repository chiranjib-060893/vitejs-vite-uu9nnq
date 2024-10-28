import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

// const getBackgroundColor = () => {
//   const hour = new Date().getHours();
//   if (hour >= 6 && hour < 12) {
//     return '#FFFAE1'; // Morning (light yellow)
//   } else if (hour >= 12 && hour < 17) {
//     return '#B3E5FC'; // Afternoon (light blue)
//   } else if (hour >= 17 && hour < 20) {
//     return '#FFE0B2'; // Evening (light orange)
//   } else {
//     return '#1C2331'; // Night (dark blue)
//   }
// };
function App() {
  // const [bgColor, setBgColor] = useState(getBackgroundColor());
  // useEffect(() => {
  //   setBgColor(getBackgroundColor());
  //   // fetchBannerImage();
  // }, []);
  return (
    <>
      <Router>
        <div
          className="wrapper-out"
          style={{
            // backgroundColor: bgColor,
            width: '100%',
            height: '100%',
            color: 'gray',
            padding: 0,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
