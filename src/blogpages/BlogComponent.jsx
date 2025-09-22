import KaiToolBar from '../KaiToolBar.jsx';
import Footer from '../Footer.jsx';

function BlogComponent({BlogContent}) {
  return (
    <main>
      <KaiToolBar/>
      {BlogContent}
      <Footer/>
    </main>
  );
}

export default BlogComponent;

