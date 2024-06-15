

import NewnavBar from './NewnavBar';

const Layout = ({ children }) => {
  return (
    <>
      <div className='mb-28'>
        <NewnavBar />
      </div>
      {children}
    </>
  );
};

export default Layout;
