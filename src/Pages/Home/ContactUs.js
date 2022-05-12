import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} >
            <div>
                <h3 className='text-primary text-center'>Contact Us</h3>
            </div>
        </section>
    );
};

export default ContactUs;