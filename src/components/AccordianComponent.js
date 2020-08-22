import { Collapse, CardHeader, CardBody, Card } from 'reactstrap';
import React, { Component } from 'react'
class AccordianComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            collapse: false
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse(){
        this.setState({
            collapse : !this.state.collapse
        });
    }
    
    componentDidMount() {
      if(this.props.open){
        this.toggleCollapse()
      }
    }

    render() {
        return (
            <div >
              <Card >
                <CardHeader>
                 <h3 onClick={this.toggleCollapse} style={{ marginBottom: '1rem' }}>{this.props.title}</h3>
                </CardHeader>
                <Collapse isOpen={this.state.collapse}>                 
                        <CardBody >
                           {this.props.bodyText}
                        </CardBody>
                </Collapse>
              </Card>
            </div>
        )
    }
}
export default AccordianComponent;

// import React, {Component} from 'react';
// import { ACCORDIANTEXT } from '../shared/accordianText'

// class AccordianComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.textPassed= this.props.bodyText;
//     this.state={
//       isToggled: false,
//       bodyText:null
//     }
//   }

//   accordStyle={
//     border: '1px solid #D3D3D3',
//     boxShadow: '1px 1px #d2d5d9',
//     borderRadius:'2px'
//   }
//   checkId= () =>{
//     if(this.props.id === 0){
//       this.toggleText(this.props)
//     }}
  
//   toggleText = (prop) =>{
//     this.setState({
//       isToggled : !this.state.isToggled
//     })
//     if(this.state.isToggled){
//       this.setState({
//         bodyText:prop.bodyText,
//       })
//     }else{
//       this.setState({
//         bodyText: null,
//       })
//     }
//   }
//   render() { 
    
//     return(
//       <div className='p-1' style={this.accordStyle} onClick={()=>this.toggleText(this.props)}>
//         <h3 className='text-center'>{this.props.title} </h3>
//         <h2 className='text-center'><i className='fa fa-angle-down'/></h2>
//         {this.state.bodyText}
//       </div>
//     )
//   }
// }

// export default AccordianComponent;

