import React from 'react'
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg
} from 'reactstrap'

import './Portfolio.css'

const PortfolioBlocks = props => {
  return (
    <div>
      <div className='portfolio'>Portfolio</div>
      <Row className='portfolioSections'>
        <Col sm='6'>
          <Card body>
            <CardTitle>Java</CardTitle>
            <CardImg
              top
              width='100%'
              src={require('./images/collections.jpg')}
              alt='Java collections image'
            />
            <CardText>
              Created a collection of elements that retained their heriarchal relationships when placed in a series of hash sets and hash maps
              {' '}
            </CardText>
            <Button
              onClick={() =>
                (window.location =
                  'https://github.com/cooksystemsinc/java-collections-oldmanriver2235')}
            >
              Github
            </Button>
          </Card>
        </Col>
        <Col sm='6'>
          <Card body>
            <CardTitle>Java</CardTitle>
            <CardImg
              top
              width='100%'
              src={require('./images/Twitter.jpg')}
              alt='Java assessment image'
            />
            <CardText>
              Used a provided API to send user stock requests and return viewable data as well as XML files
            </CardText>
            <Button
              onClick={() =>
                (window.location =
                  'https://github.com/cooksystemsinc/java-assessment-smart-share-oldmanriver2235')}
            >
              Github
            </Button>
          </Card>
        </Col>
        <Col sm='6'>
          <Card body>
            <CardTitle>Spring</CardTitle>
            <CardImg
              top
              width='100%'
              src={require('./images/Twitter.jpg')}
              alt='Spring Twitter clone image'
            />
            <CardText>
              Recreated the functionality of the Twitter API with the ability to store user info and messages.
              {' '}
              {' '}
            </CardText>
            <Button
              onClick={() =>
                (window.location =
                  'https://github.com/cooksystemsinc/social-media-assessment-oldmanriver2235')}
            >
              Github
            </Button>
          </Card>
        </Col>
        <Col sm='6'>
          <Card body>
            <CardTitle>HTML and CSS</CardTitle>
            <CardImg
              top
              width='100%'
              src={require('./images/Twitter.jpg')}
              alt='Replicated Macbook page'
            />
            <CardText>
              Attempted to replicate the look and functionality of an Apple MacBook information page using HTML and CSS
            </CardText>
            <Button
              onClick={() =>
                (window.location =
                  'https://github.com/cooksystemsinc/js-assignment-copy-page-oldmanriver2235')}
            >
              Github
            </Button>
          </Card>
        </Col>
        <Col sm='6'>
          <Card body>
            <CardTitle>JavaScript</CardTitle>
            <CardImg
              top
              width='100%'
              src={require('./images/DevDuel.jpg')}
              alt='Javascript Dev-Duel image'
            />
            <CardText>
              Used JavaScript in conjunction with HTML and CSS to pull user data from github and match users together to compare stats
            </CardText>
            <Button
              onClick={() =>
                (window.location =
                  'https://github.com/cooksystemsinc/js-assessment-dev-duel-oldmanriver2235')}
            >
              Github
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PortfolioBlocks
