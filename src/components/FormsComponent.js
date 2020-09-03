import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import { Card,CardBody,CardHeader,Row,Col,Container,} from 'reactstrap';
import { Link } from 'react-router-dom';

class FormsComponent extends Component {
    
    
    render() {
        const styles = {backgroundColor: '#f2a51a'}
        return (
            <div>
                <HeaderComponent/>
                <Container className='mt-4 mb-4'>
                <h1>Lets</h1>
                <h1 className=''>Get Started!</h1>   
                <Row className='mt-2'>
                    <Col md={6}>
                        <Card>
                            <CardHeader style={styles} className='text-center'>
                                <h1>What kind of noise?</h1>
                            </CardHeader>
                            <CardBody>
                                <Row className=' mt-3 mb-3'>
                                    <Col sm={6}>
                                        Select this if you have a vibration
                                    </Col>
                                    <Col className='text-right' sm={6}>
                                        <Link className='btn btn-primary' to= '/forms/Vibrations'>
                                            Vibrations
                                        </Link>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row className=' mt-3 mb-3'>
                                    <Col sm={6}>
                                        Select this if you have a noise like a clank, or bang
                                    </Col>
                                    <Col className='text-right' sm={6}>
                                        <Link className='btn btn-primary' to= '/forms/Clanks'>
                                            Clanks
                                        </Link>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row className=' mt-3 mb-3'>
                                    <Col sm={6}>
                                        Select this if you have a squeak or a rattle
                                    </Col>
                                    <Col className='text-right' sm={6}>
                                        <Link className='btn btn-primary' to= '/forms/Squeaks and Rattles'>
                                        Squeaks/Rattle
                                        </Link>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row className=' mt-3 mb-3'>
                                    <Col sm={6}>
                                        Select this if nothing fits your concern.
                                    </Col>
                                    <Col className='text-right' sm={6}>
                                        <Link className='btn btn-primary' to= '/forms/Something Else'>
                                            Something Else
                                        </Link>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default FormsComponent;
   