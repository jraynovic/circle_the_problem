import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import { Card,CardBody,CardHeader,CardTitle, Label,Row,Col,Container, Button, Input,Form, FormGroup } from 'reactstrap';
import { firstQuestions } from '../shared/questions'

class FormsComponent extends Component{
    constructor(props) {
        super(props);
        this.state= {
            selectionMade : false,
            step:1,
            answers: [],
            firstPage:[],
            secondPage: [],
            thirdPage: []
            
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
            this.setState({
                firstPage:newChange
            })
        }else if(page ===2){
            this.setState({
                secondPage:newChange
            })
        }else if(page===3){
            this.setState({
                thirdPage:newChange
            })
        }
        alert(this.state.firstPage)
    }

    renderForm = () =>{
        return(
            <div>
                {this.renderFormQuestions()}
                <Button onClick={this.prevHandler} >Prev</Button>
                <Button onClick={this.nextHandler} color='primary'>Next</Button>
            </div>
        )
    }

    renderFormQuestions = ()=>{
        if(this.state.step ===1){
            return(
                firstQuestions.map(question=>{
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
                <h1>Step Two</h1>
            )
        }
        if(this.state.step ===3){
            return(
                <h1>Step Three</h1>
            )
        }
        
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
        if(this.state.selectionMade===false){
            return(
                <Row className='mt-2'>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                Standard Forms
                            </CardHeader>
                            <CardBody>
                                <form>
                                {this.renderForm()}
            
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )}else{
                return(<div></div>)
            }
   }
   
   
   
   
   render(){
       return(
        <React.Fragment>
            <HeaderComponent/>
            
            <Container>
       <h1>Lets get</h1>
       <h1 className='ml-4'>started!</h1>
       {this.renderSelectionChoice()}
                
            </Container>
        
        </React.Fragment>
       )
   }

}
export default FormsComponent;