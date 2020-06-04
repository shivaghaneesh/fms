import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const profileToggle = () => setProfileDropdownOpen(!profileDropdownOpen);

  return (
    <header>
      <nav className='navbar navbar-expand-sm bg-primary navbar-dark'>
        <NavLink to='/' className='navbar-brand'>
          <i className='fa fa-handshake-o'></i>
          Outreach FMS
        </NavLink>
        <ul className='navbar-nav'>
          <NavLink to='/' className='nav-link'>
            <li className='fa fa-tasks'> </li> Dashboard
          </NavLink>

          <NavLink to='/events' className='nav-link'>
            <li className='fa fa-arrows-alt'> </li> Events
          </NavLink>

          <NavLink to='/reports' className='nav-link'>
            <li className='fa fa-file-pdf-o'></li> Reports
          </NavLink>

          <Dropdown
            className='nav-item'
            nav
            isOpen={dropdownOpen}
            toggle={toggle}
          >
            <DropdownToggle nav caret>
              Configuration <span className='caret'></span>
            </DropdownToggle>

            <DropdownMenu className='dropdown dropdown-primary'>
              <NavLink to='/roles' className='nav-link'>
                <DropdownItem>Roles</DropdownItem>
              </NavLink>
              <NavLink to='/feedbackQuestions' className='nav-link'>
                <DropdownItem>Feedback Questions</DropdownItem>
              </NavLink>
            </DropdownMenu>
          </Dropdown>
        </ul>

        <ul className='navbar-nav ml-auto'>
          <Dropdown
            className='nav-item'
            nav
            isOpen={profileDropdownOpen}
            toggle={profileToggle}
          >
            <DropdownToggle nav caret>
              Admin <span className='caret'></span>
            </DropdownToggle>

            <DropdownMenu className='dropdown dropdown-primary'>
              <NavLink to='/' className='nav-link'>
                <DropdownItem>LogOut</DropdownItem>
              </NavLink>
            </DropdownMenu>
          </Dropdown>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
