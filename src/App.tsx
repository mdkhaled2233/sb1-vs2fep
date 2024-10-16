import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home as HomeIcon, Newspaper, Users, Briefcase, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import Home from './components/Home';
import TechnologyAndNews from './components/TechnologyAndNews';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <Header />
        <nav className="bg-green-600 p-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-green-200">
                <HomeIcon className="inline-block mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/technology-and-news" className="text-white hover:text-green-200">
                <Newspaper className="inline-block mr-2" />
                Technology & News
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-white hover:text-green-200">
                <Users className="inline-block mr-2" />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/our-services" className="text-white hover:text-green-200">
                <Briefcase className="inline-block mr-2" />
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/chat" className="text-white hover:text-green-200">
                <MessageSquare className="inline-block mr-2" />
                Chat
              </Link>
            </li>
          </ul>
        </nav>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology-and-news" element={<TechnologyAndNews />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;