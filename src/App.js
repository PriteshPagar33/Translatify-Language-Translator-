import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Translator from './components/Translator';
import Settings from './components/Settings';
import About from './components/About';
import Help from './components/Help';
import Feedback from './components/Feedback';
import { ThemeProvider } from './components/ThemeContext';
import DeveloperInfo from './components/DeveloperInfo';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Translator />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/developer-info" element={<DeveloperInfo />} />
          </Routes>
        </Layout>
      </Router>
      </ThemeProvider>
  );
};

export default App;