import React, { FunctionComponent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, NavItem, UncontrolledDropdown } from "reactstrap";
import { rHome, rAuth }  from "../../config/routes";


const Header: FunctionComponent = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <div>
        <Navbar color="light" light expand="md">
          <Link className="navbar-brand" to={ rHome }>symfony app</Link>
          <NavbarToggler onClick={ toggleNavbar } />
          <Collapse isOpen={ isNavbarOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  // exact={ true }
                  className="nav-link"
                  to={ rHome }
                >
                  Home
                </NavLink>
              </NavItem>
  
              {/* <NavItem>
                <NavLink
                  className="nav-link"
                  to={ ABOUT }
                >
                  About
                </NavLink>
              </NavItem> */}
  
              <NavItem>
                <NavLink
                  className="nav-link"
                  to={ rAuth }
                >
                  Posts
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}

export default Header;