import React, { FunctionComponent } from 'react';
import { Nav, Link, Button } from '../../atoms';

const NavBar: FunctionComponent = () => {
  return (
    <Nav>
      <Link>Home</Link>
      <Button><Link style={{color: "White"}}>ClickMe</Link></Button>
      <Link>About</Link>
    </Nav>
  )
}

export default NavBar;