import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OperatingSystems from './pages/Learning/OperatingSystems';
import LinuxBasics from './pages/Learning/LinuxBasics';
import SQLBasics from './pages/Learning/SQLBasics';
import ThreatsAndVulnerabilities from './pages/Learning/ThreatsAndVulnerabilities';
import CiscoIntro from './pages/Learning/CiscoIntro';
import PracticalWork from './pages/PracticalWork';
import Reflection from './pages/Reflection';
import './styles/global.css';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/learning/operating-systems" element={<OperatingSystems />} />
                    <Route path="/learning/linux-basics" element={<LinuxBasics />} />
                    <Route path="/learning/sql-basics" element={<SQLBasics />} />
                    <Route path="/learning/threats-vulnerabilities" element={<ThreatsAndVulnerabilities />} />
                    <Route path="/learning/cisco-intro" element={<CiscoIntro />} />
                    <Route path="/practical-work" element={<PracticalWork />} />
                    <Route path="/reflection" element={<Reflection />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
