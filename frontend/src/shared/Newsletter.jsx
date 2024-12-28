import React from 'react'
import './newsletter.css'

import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter=() => {
    return(
     <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                      <h2>Subscribe now to get useful traveling information</h2>
                     <div className="newsletter__input">
                        <input type="email" placeholder='Enter you email'/>
                        <button className="btn newsletter_btn">Subscribe</button>
                     </div>  
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ducimus est hic animi nobis doloremque sunt odio, quos, magnam nihil explicabo deserunt modi, quo laboriosam. Placeat magni quis totam voluptates!</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter img"></div>
                        <img src={maleTourist}alt=""/>
                </Col>
                
                
            </Row>
        </Container>
    </section>
    );
};
export default Newsletter;