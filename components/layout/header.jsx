import React from 'react';
import Navigation from '../views/navigation';
import Footer from '../views/footer';

function Header({ children }) {
  return (<>
    <Navigation />
    {children}
    <Footer />
  </>);
}

export default Header;