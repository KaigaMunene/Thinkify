import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./components/Home'));
// const About = React.lazy(() => import('./pages/About'));
// const OurTeam = React.lazy(() => import('./pages/OurTeam'));
// const Contact = React.lazy(() => import('./pages/Contact'));
// const Projects = React.lazy(() => import('./pages/Projects'));
// const Apartment = React.lazy(() => import('./pages/Apartments'));
// const Mansionette = React.lazy(() => import('./pages/Mansionette'));
// const WareHouse = React.lazy(() => import('./pages/Warehouse'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/our-team' element={<OurTeam />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/apartment' element={<Apartment />} />
          <Route path='/mansionette' element={<Mansionette />} />
          <Route path='/warehouse' element={<WareHouse />} /> */}
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}
function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
