import React from 'react'

import NavigationButtons from "../components/NavigationButtons";

import './Contact.css'

const Contact = (props) => {
    return (

            <div className='contact content'>
                <h2>Contact.</h2>
                <h5>Email</h5>
                <h6 className='contact email'><a href="mailto: henryfellerhoff@gmail.com">henryfellerhoff@gmail.com</a></h6>
                <NavigationButtons pages={['Home', 'About', 'Projects']} scrollTo={props.scrollTo} />
            </div>

    )
};

export default Contact;