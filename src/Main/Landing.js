import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg
} from 'reactstrap'
import './Portfolio.css'
import './Landing.css'
import './AboutMe.css'
import { BrowserRouter, Route } from 'react-router-dom'
import PortfolioBlocks from './Portfolio'
import Resume from './Resume'
import AboutMe from './AboutMe'
import Trees from './images/Trees.png'
export default class Example extends React.Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <BrowserRouter>
        <div class='EntirePage'>
          <header>
            <div className='entireNavBar'>
              <a href='/' className='homeButton'>Home</a>
              <div className='navBarDropdown'>
                <Navbar className='navBar' color='faded' light>
                  <NavbarToggler
                    className='navBarToggler'
                    onClick={this.toggleNavbar}
                  />
                  <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink color='green' href='/AboutMe'>
                          About Me
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href='/Resume'>Resume</NavLink>
                        <NavLink href='/Portfolio'>Portfolio</NavLink>

                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            </div>
          </header>
          <Route path='/AboutMe' exact component={AboutMe} />
          <Route path='/Portfolio' exact component={PortfolioBlocks} />
          <Route path='/Resume' exact component={Resume} />
          <Route
            path='/'
            exact
            render={() => (
              <div class='LandingPageImage'>
                <Card body>
                  <CardImg
                    top
                    width='100%'
                    src={require('./images/Trees.png')}
                    alt='Landing page graphic'
                  />
                </Card>
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    )
  }
}
