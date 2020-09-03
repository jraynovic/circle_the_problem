import React, {Component} from 'react';
import {Nav,Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class HeaderComponent extends Component{
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
        
    }
    toggleNav () {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        const navStyle = {
            backgroundColor: '#f2a51a'
        };
        
        return(
            <div>
                <React.Fragment>
                    <Navbar style={navStyle} dark sticky='top' expand='md' >
                            <NavbarBrand className = 'mr-auto ml-4' href="/"><img height='70' width='70' src='/assets/images/port_logo.png'  alt="logo" /></NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav}/>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className='ml-auto mr-4'>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/home'>
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/contact'>
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/forms'>
                                            Forms
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>                      
                    </Navbar>
                </React.Fragment>
                

            </div>
        )
    }
}
export default HeaderComponent;