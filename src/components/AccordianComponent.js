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

