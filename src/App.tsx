import './App.css';
import React, {useState} from 'react';
import { Menu, X, Mail, ExternalLink, MapPin, Calendar, Code2, Briefcase, Camera, Home, User, FolderOpen, Plane, FileText, MessageSquare, FormIcon} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FaGithub className="App-logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
