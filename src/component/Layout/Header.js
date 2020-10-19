import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {NavLink} from 'reactstrap';
import logo from './../../assets/images/logo.png';
const Header = (props) => {
    let {routes} = props
    return (
        <Navbar bg="light" expand="lg" className="headerBar">
            <Navbar.Brand href="#home"><img className="headerImg" src={logo} width="50%"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink tag={Link} to="/">Home</NavLink>
                        {routes.map(r => <NavLink key={r.id} tag={Link} to={r.path}>{r.name}</NavLink>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;