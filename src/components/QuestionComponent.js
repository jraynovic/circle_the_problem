import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import {Card,CardBody,CardHeader, Label,Row,Col,Container, Button, Input,Form, FormGroup } from 'reactstrap';
import * as questions  from '../shared/questions'
import {Link } from 'react-router-dom'

class QuestionComponent extends Component{
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state= {
            selectionMade : false,
            step:1,
            answers: [],
            firstPage:[],
            secondPage: [],
            thirdPage: [],
            fourthPage:[],
            fifthPage:[],
            review:false       
        }
    }
    
    handleChange = (question,page) =>{
        let newChange = this.state.answers
        if(!this.state.answers.includes(question)){
            newChange.push(question)
        }else{
            let index= newChange.indexOf(question);
            newChange.splice(index,1)
        }  
        this.setState({
            answers: newChange
        })
        if(page ===1){
            if(this.state.firstPage.includes(question)){
                let newArr = [...this.state.firstPage]
                let index = newArr.indexOf(question)
                newArr.splice(index,1)
                this.setState({
                    firstPage:newArr
                })
            }else{
                let newArr = [...this.state.firstPage,question]
                this.setState({
                    firstPage: newArr
                })
            }
        }else if(page ===2){
            if(this.state.secondPage.includes(question)){
                let newArr = [...this.state.secondPage]
                let index = newArr.indexOf(question)
                newArr.splice(index,1)
                this.setState({
                    secondPage:newArr
                })
            }else{
                let newArr = [...this.state.secondPage,question]
                this.setState({
                    secondPage: newArr
                })
            }
        }else if(page===3){
            if(this.state.thirdPage.includes(question)){
                let newArr = [...this.state.thirdPage]
                let index = newArr.indexOf(question)
                newArr.splice(index,1)
                this.setState({
                    thirdPage:newArr
                })
            }else{
                let newArr = [...this.state.thirdPage,question]
                this.setState({
                    thirdPage: newArr
                })
            }
        }else if(page===4){
            if(this.state.fourthPage.includes(question)){
                let newArr = [...this.state.fourthPage]
                let index = newArr.indexOf(question)
                newArr.splice(index,1)
                this.setState({
                    fourthPage:newArr
                })
            }else{
                let newArr = [...this.state.fourthPage,question]
                this.setState({
                    fourthPage: newArr
                })
            }
        }else if(page===5){
            if(this.state.fifthPage.includes(question)){
                let newArr = [...this.state.fifthPage]
                let index = newArr.indexOf(question)
                newArr.splice(index,1)
                this.setState({
                    fifthPage:newArr
                })
            }else{
                let newArr = [...this.state.fifthPage,question]
                this.setState({
                    fifthPage: newArr
                })
            }
        }
    }

    headerText = () =>{
        switch(this.state.step){
            case 1:
                return'When does it happen?'
            case 2:
                return ('What speed are you going?')
            case 3:
                return 'What part of the vehicle does it come from?'
            case 4:
                return 'Can you feel in certain parts of the vehicle?'
            case 5:
                return 'What does it take to duplicate the concern?'
            case 6:
                return 'Lets review and submit!'
            default:
                return ' '
        }
    }
    renderFormCard= () =>{
        const styles = {backgroundColor: '#f2a51a'}
        
        if(this.state.step === 5){
            return(
                <Card>
                    <CardHeader className='text-center' style={styles}>
                        <h1>
                            {this.headerText()}
                        </h1>
                            
                    </CardHeader>
                     <CardBody>
                        {this.renderFormQuestions()}
                        <div className='text-right'>
                            <Button className='mr-2' onClick={this.prevHandler} >Prev</Button>
                             <Button color='primary' onClick={this.nextHandler}>Review and Submit</Button>
                        </div>
                    </CardBody>
                </Card>
            )
        }else if(this.state.step === 6){
            return(
                <Card>
                    <CardHeader className='text-center' style={styles}>
                        <h1>
                            {this.headerText()}
                        </h1>
                            
                    </CardHeader>
                     <CardBody>
                        {this.renderFormQuestions()}
                        {/* <div className='text-right'>
                            <Button className='mr-2' onClick={this.prevHandler} >Prev</Button>
                             <Button color='primary' onClick={this.nextHandler}>Submit</Button>
                        </div> */}
                    </CardBody>
                </Card>
            )
            // (this.state.step !==5 || this.state.step !==6)
        }else if (this.state.step !==5 || this.state.step !==6){
            return(
                <Card className='mb-4'>
                    <CardHeader className='text-center' style={styles}>
                        <h1>
                            {this.headerText()}
                        </h1>           
                    </CardHeader>
                    <CardBody>
                        {this.renderFormQuestions()}
                        <div className='text-right'>
                            <Button className='mr-2' onClick={this.prevHandler} >Prev</Button>
                            <Button  onClick={this.nextHandler} color='primary'>Next</Button>
                            {/* <Button className='ml-2' onClick={this.nextHandler} color='primary'>Next</Button> */}
                        </div>
                    </CardBody>
                </Card>
            )
        }
    }
  
    renderFormQuestions = ()=>{
        if(this.state.step ===1){
            return(
                questions.firstQuestions.map(question=>{
                return(
                        <div key={question+this.state.step} className='mt-2 mb-4'>
                            <input className='mr-3' onChange={()=>this.handleChange(question,1)} checked={this.state.answers.includes(question)} value={question} id={question} type='checkbox'/>
                            <label htmlFor={question}>{question}</label>                     
                        </div> 
                )            
                })
            )
        }
        if(this.state.step ===2){
            return(
                questions.secondQuestions.map(question=>{
                    return(
                            <div key={question+this.state.step} className='mt-2 mb-4'>
                                <input className='mr-3' onChange={()=>this.handleChange(question,2)} checked={this.state.answers.includes(question)} value={question} id={question} type='checkbox'/>
                                <label htmlFor={question}>{question}</label>                     
                            </div> 
                    )            
                    })
            )
        }
        if(this.state.step ===3){
            return(
                questions.thirdQuestions.map(question=>{
                    return(
                            <div key={question+this.state.step} className='mt-2 mb-4'>
                                <input className='mr-3' onChange={()=>this.handleChange(question,3)} checked={this.state.answers.includes(question)} value={question} id={question} type='checkbox'/>
                                <label htmlFor={question}>{question}</label>                     
                            </div> 
                    )            
                    })
            )
        }
        if(this.state.step ===4){
            return(
                questions.fourthQuestions.map(question=>{
                    return(
                            <div key={question+this.state.step} className='mt-2 mb-4'>
                                <input className='mr-3' onChange={()=>this.handleChange(question,4)} checked={this.state.answers.includes(question)} value={question} id={question} type='checkbox'/>
                                <label htmlFor={question}>{question}</label>                     
                            </div> 
                    )            
                    })
            )
        }
        if(this.state.step ===5){
            return(
                questions.fifthQuestions.map(question=>{
                    return(
                            <div key={question+this.state.step} className='mt-2 mb-4'>
                                <input className='mr-3' onChange={()=>this.handleChange(question,5)} checked={this.state.answers.includes(question)} value={question} id={question} type='checkbox'/>
                                <label htmlFor={question}>{question}</label>                     
                            </div> 
                    )            
                    })
            )
        }
        if (this.state.step === 6){
            return(
                this.RenderReview()
            )
        }
        if(this.state.step===7){
            return(
                <div className='mt-5 text-center'>
                    <h4 className='mt-5'>Thank you!</h4>
                    <h6 className='mb-5'>We have recieved your form!</h6>
    
                    <Link className='mt-5 mb-5 btn btn-primary' to='/home'>Back to Home</Link> 
                </div>
            )
        }        
    }

    RenderReview = () =>{
        return(
            
            <Form onSubmit={this.submitForm} action="https://formspree.io/maypzlgn"
            method="POST">
            <div> 
                <ol>
                    <li className='mt-3'>
                       <Label htmlFor='when'>When does it happen?</Label>
                      <ul>
                          {this.state.firstPage.map(answer => <li key ={answer+1}><Input plaintext name='when'  value={answer} defaultValue={answer}>{answer}</Input> </li>)}
                      </ul>
                    </li>
                    <li className='mt-3'>
                    <Label htmlFor='speed'>What speed are you going?</Label>
                      <ul>
                          {this.state.secondPage.map(answer => <li key ={answer+1}> <Input plaintext name='speed' value={answer} defaultValue={answer}>{answer}</Input></li>)}
                      </ul>
                    </li>
                    <li className='mt-3'>
                     <Label htmlFor='where_from'>What part of the vehicle does it come from?</Label> 
                      <ul>
                          {this.state.thirdPage.map(answer => <li key ={answer+1}> <Input plaintext name='where_from' value={answer} defaultValue={answer}>{answer}</Input></li>)}
                      </ul>
                    </li>
                    <li className='mt-3'>
                      <Label htmlFor='where_is_it_felt'>Can you feel it in certain parts of the vehicle</Label>
                      <ul>
                          {this.state.fourthPage.map(answer => <li key ={answer+1}> <Input plaintext name='where_is_it_felt' value={answer} defaultValue={answer}>{answer}</Input></li>)}
                      </ul>
                    </li>
                    <li className='mt-3'>
                      <Label htmlFor='how_to_duplicate'>What does it take to duplicate the concern?</Label>
                      <ul>
                          {this.state.fifthPage.map(answer => <li key ={answer+1}> <Input plaintext name='how_to_duplicate' value={answer} defaultValue={answer}>{answer}</Input></li>)}
                      </ul>
                    </li>
                </ol>
                <FormGroup>
                    <Row>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input name='firstName' id='firstName' type='text' placeholder='First Name'/>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input name='lastName' id='lastName' type='text' placeholder='Last Name'/>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                    <Label htmlFor='email'>Email</Label>
                    <Input name='email' id='email' type='email' placeholder='Email'/>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='addition concerns'>Addition comments,concerns, or more information</Label>
                    <Input name ='additional concerns' type='textarea' rows='7/'/>
                </FormGroup>
                <div className='text-right'>
                    <Button className='mr-2' onClick={this.prevHandler} >Prev</Button>
                    <Button color='primary' type='submit'>Submit</Button>
                </div>
            </div>
            </Form>
            
        )
    }

    nextHandler = () =>{       
        this.setState({
            step: this.state.step+1
        })
    }

    prevHandler = () =>{
        if(this.state.step>1){
            this.setState({
                step: this.state.step-1
        })}
    }
   
   renderSelectionChoice = () =>{
        // console.log(this.state.selectionMade)
       
            return(
                <Row className='mt-2'>
                    <Col lg={6}>
                         {this.renderFormCard()}
                    </Col>
                </Row>
            )
   }

   render(){
       return(
        <React.Fragment>
            <HeaderComponent/>
            <Container>
                <h1>Tell us about your concern with -{this.props.noise.noiseType}-</h1>
                {this.renderSelectionChoice()}
            </Container>
        </React.Fragment>
       )
   }
   
   submitForm(ev){
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    data.append('When does it heppen?',this.state.firstPage)
    data.append('What speed are you going?',this.state.secondPage)
    data.append('What part of the vehicle does it come from?',this.state.thirdPage)
    data.append('Can you feel it in certain parts of the vehicle',this.state.fourthPage)
    data.append('What does it take to duplicate the concern?',this.state.fifthPage)
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
    this.nextHandler()
  }

}
export default QuestionComponent;