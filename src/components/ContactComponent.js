import React from 'react';

import HeaderComponent from './HeaderComponent';
import ContactFormComponent from './ContactFormComponent';
function ContactComponent(){
    return(
        <div>
            <HeaderComponent/>
            <h1>Contact</h1>
            <ContactFormComponent/>           
        </div>
        
    )
}
export default ContactComponent;