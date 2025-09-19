import Header from './Header.js';
import SectionBlog from './SectionBlog.jsx';
import SectionSwe from './SectionSwe.js';
import SectionTennis from './SectionTennis.jsx';
import Footer from './Footer.jsx';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function Home() {
  var location = useLocation();

  useEffect(() => {
    // Get the hash from the URL (e.g., '#section-2')
    console.log(location);

    // Check if a hash exists
    if (location.hash) {
      // Find the corresponding element
      const element = document.querySelector(location.hash);
      console.log(element);

      // If the element exists, scroll to it
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
      <Header/>
      <SectionSwe/>
      <SectionTennis/>
      <SectionBlog/>
      <Footer/>
    </main>
    );
}

export default Home;
