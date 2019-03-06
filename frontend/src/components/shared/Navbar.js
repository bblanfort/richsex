import React, { Component } from 'react';

// styles
// import './Navbar.css';

// custom components
import NavbarAuth from './NavbarAuth';
import NavbarUnauth from './NavbarUnauth';

class Navbar extends Component {
  render() {
    const { session } = this.props;

    return (
      <nav>
        {session && session.getCurrentUser ? <NavbarAuth session={session} /> : <NavbarUnauth />}
      </nav>
    );
  }
}

export default Navbar;
