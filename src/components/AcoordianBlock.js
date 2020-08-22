import React, { Component, createRef } from 'react'
import { ACCORDIANTEXT } from '../shared/accordianText'
import { Collapse, CardHeader, CardBody, Card } from 'reactstrap';

class AcoordianBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'one' : false,
            'two' : false,
            'three' : false,
            'four' : false 
        };
    }

    toggleCollapse(id){
        // this.setState({
        //     'one' : false,
        //     'two' : false,
        //     'three' : false,
        //     'four' : false 
        // })
        this.setState({
            [id] : !this.state.collapse
        });
    }
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <h3 onClick={()=>this.toggleCollapse('one')} style={{ marginBottom: '1rem' }}> We are the new kids on the block.</h3>
                    </CardHeader>
                    <Collapse isOpen={this.state.one}  >
                            <CardBody>
                                 Started in 2020 as a portfolio project. Circle the Problem was created by a 
                                 automotive technician, Joseph Raynovic, learning web development.
                                  A passion to use technology to solve real world problems is what
                                   led us here today.
                            </CardBody>
                    </Collapse>
                </Card>         
            </div>
        )
    }
}

export default AcoordianBlock;