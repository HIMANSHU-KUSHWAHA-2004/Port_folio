// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer.js';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Portfolio website of Your Name showcasing projects and skills." />
        <meta name="keywords" content="Your Name, Portfolio, Web Developer, Projects" />
        <meta property="og:title" content="Your Name - Portfolio" />
        <meta property="og:description" content="Portfolio website of Your Name showcasing projects and skills." />
        <meta property="og:image" content="https://your-portfolio-url.com/og-image.jpg" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
