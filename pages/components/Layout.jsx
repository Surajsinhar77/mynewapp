import Footer from './Footer';

import NewnavBar from './NewnavBar';

const Layout = ({ children }) => {
  return (
    <>
      <div className='mb-28'>
        <NewnavBar />
      </div>
      {children}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
