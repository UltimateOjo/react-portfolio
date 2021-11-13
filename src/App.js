//import logo from './logo.svg';
import Nav from './components/Nav';
import Footer from './components/Nav';
import Project from './components/Project/Project';
import ContactForm from './components/Contact';
import React, { useState } from 'react';

import './App.css';

function App() {
  const [categories] = useState([
    { name: 'portfolio', description: 'Portfolio of past projects' },
    { name: 'resume', description: 'Resume of Qualifications and Accomplishments' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Project currentCategory={currentCategory}></Project>
            <Footer></Footer>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}          

      </main>
    </div>
  );
}
export default App;
