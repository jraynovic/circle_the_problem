import React from 'react';
import {NavLink, Link} from 'react-router-dom';

function FooterComponent(props){
    const footerStyle = {
        backgroundColor: '#f2a51a',
        color: 'white'
    }

    return(
        <footer style={footerStyle} className='site-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 text-center mt-2'>
                        <h5 className='text-dark'>Links</h5>
                        <div className='mb-2'>
                            <Link className='ml-3 mr-3' style={footerStyle} to='/home'>Home</Link>                            
                            <Link className='ml-3 mr-3' style={footerStyle}  to='/contact'>Contact</Link>
                            <Link className='ml-3 mr-3' style={footerStyle}  to='/forms'>Forms</Link>
                        </div>
                                
                    </div>
                    <div  className='col-sm-4 text-center mt-4'>
                        <a style={footerStyle} className="btn btn-social-icon btn-instagram mr-1" href="http://instagram.com/"><i className=" fa fa-instagram"></i></a>
                        <a style={footerStyle} className="btn btn-social-icon btn-facebook mr-1 ml-1" href="http://facebook.com/"><i className=" fa fa-facebook"></i></a>
                        <a style={footerStyle} className="btn btn-social-icon btn-twitter mr-1 ml-1" href="http://twitter.com/"><i className=" fa fa-twitter"></i></a>
                        <a style={footerStyle} className="btn btn-social-icon btn-youtube mr-1" href="http://youtube.com/"><i className=" fa fa-youtube"></i></a>
                    </div>
                    <div className='col-sm-4 text-center mt-2'>
                        <a role="button" className="btn btn-link text-white" href="tel:+1-360-777-1234"><i className="fa fa-phone text-white"></i> 1-360-777-1234</a> <br/>
                        <a role="button" className="btn btn-link text-white" href="mailto: contact@circletheproblem.com"><i className="fa fa-envelope-o text-white"></i> contact@circletheproblem.com </a>
                    </div>
                </div>
            </div>

        </footer>
    
        // <footer className="site-footer">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-sm-4 mt-2 text-center">
        //                 <h5 className="mr-1">Links</h5>
        //                 <a className="text-white ml-1 mr-1" href="index.html">Home</a>
        //                 <a className="text-white ml-1 mr-1" href="forms.html">Forms</a>
        //                 <a className="text-white ml-1" href="contact.html">Contact</a>
        //             </div> */}
        //             <div className="col-sm-4 mt-2 text-center">
        //                 {/* <h5 >Social</h5>
        //                 <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className=" fa fa-instagram"></i></a>
        //                 <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className=" fa fa-facebook"></i></a>
        //                 <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className=" fa fa-twitter"></i></a>
        //                 <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className=" fa fa-youtube"></i></a>
        //             </div> */}
        //             <div className="col-sm-4 text-center">
        //                 {/* <a role="button" className="btn btn-link text-white" href="tel:+1-360-777-1234"><i className="fa fa-phone text-white"></i> 1-360-777-1234</a> <br>
        //                 <a role="button" className="btn btn-link text-white" href="mailto: contact@circletheproblem.com"><i className="fa fa-envelope-o text-white"></i> contact@circletheproblem.com </a>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    );
}

export default FooterComponent;