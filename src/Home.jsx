import Header from './Header.js';
import SectionBlog from './SectionBlog.jsx';
import SectionSwe from './SectionSwe.js';
import SectionTennis from './SectionTennis.jsx';
import Footer from './Footer.jsx';

function Home() {
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
