// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import { Label,Row,Col, Button, Input,Form, FormGroup, Container } from 'reactstrap';

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
    //   <form
    //     onSubmit={this.submitForm}
    //     action="https://formspree.io/maypzlgn"
    //     method="POST"
    //   >
      <Form onSubmit={this.submitForm}
        action="https://formspree.io/maypzlgn"
        method="POST">
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
            <FormGroup>
                <Row>
                    <Col md={8}>
                        <Label htmlFor='individualOrBusiness'>Are you an individual or business?</Label>
                        <Input type='select' name='individualOrBusiness' id='individualOrBusiness'>
                            <option>Select...</option>
                            <option>Individual</option>
                            <option>Business</option>
                        </Input>
                    </Col>
                </Row>
            </FormGroup>
           
            
            <FormGroup tag="fieldset">
                <legend>Can we contact you?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" value='yes' name="canContact" />{' '}
                    Yes
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" value='no' name="canContact" />{' '}
                    No
                </Label>
                </FormGroup>
                <FormGroup>
                    <Label for="textArea">Comments, questions, concerns.</Label>
                    <Input type="textarea" name="text" id="textArea" rows = '7' />
                </FormGroup>
                <FormGroup>
                {status === "SUCCESS" ? <p>Thanks!</p> : <Button type='submit' color='primary'>Submit</Button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </FormGroup>
            </FormGroup>          
        </Container>
    </Form>
        // <label>Email:</label>
        // <input type="email" name="email" />
        // <label>Message:</label>
        // <input type="text" name="message" />
        // {status === "SUCCESS" ? <p>Thanks!</p> : <Button type='submit' color='primary'>Submit</Button>}
        // {status === "ERROR" && <p>Ooops! There was an error.</p>}
      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default MailForm;