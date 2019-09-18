import React from 'react'

import NavigationButtons from "../components/NavigationButtons";

import './Contact.css'
import arrow from '../images/arrow.png';

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

{/*<div className='contact container'>*/}
{/*<img src={arrow} className='contact arrow-image' alt='Arrow' />*/}
{/*<div className='contact arrow-text-container'>*/}
{/*    <p className='contact arrow-text'>LinkedIn</p>*/}
{/*    <p className='contact arrow-text'>+</p>*/}
{/*    <p className='contact arrow-text'>Github</p>*/}
{/*</div>*/}
// </div>