import React, {createRef, Component,} from 'react'
import { Collapse, CardHeader, CardBody, Card } from 'reactstrap';

class AcoordianBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one : false,
            two : false,
            three : false,
            four : false
        };
    }
    wrapper = createRef();

    componentDidMount() {
        const node = this.wrapper.current;
        /* Uses DOM node  */ 
    }

    // closeAll = () =>{
    //     this.setState({
    //         one : false,
    //         two : false,
    //         three : false,
    //         four : false 
    //     })
    // }

    toggleCollapseOne= () =>{
        // this.closeAll()
        this.setState({
            one : !this.state.collapse
        });
    }
    toggleCollapseTwo= () =>{
        // this.closeAll()
        this.setState({
            one : !this.state.collapse
        });
    }
    render() {
        return (
            <div>
                <div>
                <Card ref={this.wrapper}>
                    <CardHeader>
                        <h3 onClick={()=>this.toggleCollapseOne()} style={{ marginBottom: '1rem' }}> We are the new kids on the block.</h3>
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
                <div>
                <Card>
                    <CardHeader>
                        <h3 onClick={()=>this.toggleCollapseTwo()} style={{ marginBottom: '1rem' }}>Two perspectives, one solution</h3>
                    </CardHeader>
                    <Collapse isOpen={this.state.two}  >
                            <CardBody>
                            You know your car better than anyone. You drive it every day and each noise that is new stands out.
                             Repair technicians see a wide range of vehicles daily and have to differentiate between your concern and normal noises. 
                             Luckily you have found the solution, Cirlce the Problem
                            </CardBody>
                    </Collapse>
                </Card>  
                </div>            
            </div>
        )
    }
}

export default AcoordianBlock;