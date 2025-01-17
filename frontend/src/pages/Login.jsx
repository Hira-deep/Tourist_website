import React from 'react';
import { Container,Row, Col,Form,FormGroup ,/*Button*/} from 'reactstrap';    
//import {link} from 'react-router-dom';
import '../styles/login.css';
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'



const Login = () => {
    return(
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                    <div className="login__container d-flex justify-content-between">
                        <div className="login__img">
                            <img src={loginImg} alt=""/>

                        </div>
                        <div className="login__form">
                        <div className="user">
                            <img src={userIcon} alt=""/>

                        </div>
                        <h2>Login</h2>
                        <Form>
                            <FormGroup>
                                <input type='text' placeholder='Email' required id='email'/>
                            </FormGroup>
                        </Form>
                        </div>
                    </div>

                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login;
