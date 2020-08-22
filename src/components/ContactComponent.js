import React from 'react';
import { Label,Row,Col, Button, Input,Form, FormGroup, Container } from 'reactstrap';
import HeaderComponent from './HeaderComponent';
function ContactComponent(props){
    return(
        <div>
            <HeaderComponent/>
            <h1>Contact</h1>
            <Form>
                <Container>
                    <FormGroup>
                        <Row>
                            <Col md={8}>
                                <Label htmlFor='fName'>First Name</Label>
                                <Input type='text' name='fName' id='fName' placeholder='First Name'/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col md={8}>
                                <Label htmlFor='lName'>Last Name</Label>
                                <Input type='text' name='lName' id='lName' placeholder='Last Name'/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col md={8}>
                                <Label htmlFor='busninessName'>Business Name</Label>
                                <Input type='text' name='busninessName' id='busninessName' placeholder='Business Name'/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col md={8}>
                                <Label htmlFor='phoneNum'>Phone Number</Label>
                                <Input type='number' name='phoneNum' id='phoneNum' placeholder='Phone Number'/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col md={8}>
                                <Label htmlFor='email'>Email</Label>
                                <Input type='email' name='email' id='email' placeholder='Email'/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Are you an individual or a business?</legend>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Individual
                        </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Business
                        </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Can we contact you?</legend>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radioContact" />{' '}
                            Yes
                        </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radioContact" />{' '}
                            No
                        </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="textArea">Comments, questions, concerns.</Label>
                            <Input type="textarea" name="text" id="textArea" rows = '7' />
                        </FormGroup>
                        <FormGroup>
                        <Button color='primary'>Submit</Button>
                        </FormGroup>
                    </FormGroup>
                        
                    

                    
                
                </Container>
            </Form>
            
        </div>
        
    )
}
export default ContactComponent;