import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import ParralaxComponent from './ParralaxComponent';
import {Card, CardHeader,CardTitle, CardBody,} from 'reactstrap';
import ImageChangeComponent from './ImageChangeComponent'
import { ACCORDIANTEXT } from '../shared/accordianText'
import {Link} from 'react-router-dom';
import AccordianComponent from './AccordianComponent';
import AccordianBlock from './AccordianBlock'


class HomeComponent extends Component{
        constructor(props) {
          super(props); 
          this.state={
            accordianText : ACCORDIANTEXT
          };
          this.style= {backgroundColor: '#f2a51a'}
          
        }
        
        RenderAccordian = ACCORDIANTEXT.map(comp =>{
          let open = false;
          if (comp.id ===0){
            open=true;
          }
          return(<AccordianComponent id={comp.id} open={open} key={comp.id} bodyText={comp.body} title={comp.title}/>)
            }
          ) 

        render(){
        return(
        <div>
          <HeaderComponent/>
          <ParralaxComponent/>
            <div className='container'>
              <div className='row mb-0'>
                <div className='col-md-5 mr-md-4 ml-md-3'>
                  <Card className='mt-3 '>
                    <CardHeader className='text-center text-white cardHeader' style={this.style}>
                       Guided Questions
                    </CardHeader>
                    <CardTitle className='text-center mb-2'>
                         Lead to specific concerns
                    </CardTitle>
                    <CardBody className='text-center mb-5'>
                        Use our forms with guided questions to easily describe your problems. 
                        Your auto repair shop will be able to diagnose and 
                        repair your concern faster and more accurately. 
                        Saving you money and time.
                        <br className='mb-5'/>
                        <Link className='btn btn-primary mt-5' to={'/forms'}>Go To Forms</Link>
                   </CardBody>
                  </Card>
                </div>
                <div className='col-md-6 mt-3 ml-md-5  text-center'>
                    {/* <img style={{width:'100%',height:'100%',objecFit:'contain'}} src={image} alt="" /> */}
                    <ImageChangeComponent />
                </div>
              </div>
              <div className='row'>
                  <div className='col-12 text-center'>
                    about us
                    <br/>
                    <i className="fa fa-arrow-circle-down text-dark" style={{fontSize: '4em'}}></i>
                    <hr/>
                    <h3 className='text-left' style={{fontSize:'3em'}}>
                      Everything you need to know about us
                    </h3>
                  </div>
              </div>
              <div className='row'>
                <div className='col-md-7 mb-4 mt-4'>
                  {this.RenderAccordian}
                  {/* <AccordianBlock/> */}
                </div>
                <div className='col-md-5 mt-1 mb-4'>
                  <Card className='mt-3 '>
                    <CardHeader className='text-center text-white cardHeader ' style={this.style}>
                      We make it easy
                    </CardHeader>
                    <CardTitle className='text-center mb-2 mt-2'>
                      Direct information
                    </CardTitle>
                    <CardBody className='text-center '>
                      If you have ever played a game of telephone you can guess what happens.
                      Driving your car everyday means you know exatly what sounds are new or different.
                        <ul className='text-left mt-2 '>
                          <li>Sent verbatim to the technician</li>
                          <li>Lower repair times</li>
                          <li>More accurate repairs</li>
                          <li>Less frustraion</li>
                        </ul>
                        <Link className='btn btn-primary mt-2' to={'/forms'}>Go To Forms</Link>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
        </div>
        )
        }
    
}
export default HomeComponent;