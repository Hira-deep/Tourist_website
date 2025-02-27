import React from 'react'; //6.9k (gzipped: 2.7k)
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick__links = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/about",
    display: "About"
  },
  {
    path: "/tours",
    display: "Tours"
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery"
  },
  {
    path: "/login",
    display: "Login"
  },
  {
    path: "/register",
    display: "Register"
  },
];

const Footer = () => {
  const year = new Date().getFullYear();  // Added parentheses to properly call the function
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquam blanditiis incidunt libero consectetur labore vitae unde consequuntur expedita quae deleniti dolore neque quis quos voluptatibus, corporis officiis numquam harum?</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick links</h5>
            <ListGroup className="footer__quick-links">
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i className="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className="mb-0">INDIA</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i className="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className="mb-0">hiradeep@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="mb-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i className="ri-phone-fill"></i></span>
                  Phone:
                </h6>
                <p className="mb-0">9845299641</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyrights">Copyrights {year}, design and developed by HIRADEEP</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
