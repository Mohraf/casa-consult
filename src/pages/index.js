import React from 'react';
import Navbar from '../components/Navbar';
import '../../src/App.css';

import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from '../pages/App';
// // import { BrowserRouter as Router, Switch, Route } from 'gatsby';
// import Services from '../pages/Services';
// import Products from '../pages/Products';
// import SignUp from '../pages/SignUp';

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection />
      <Cards />
      <Footer />
  </>
  )
}
