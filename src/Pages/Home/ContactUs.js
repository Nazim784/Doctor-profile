import React from 'react';
import appointment from '../../assets/images/appointment.png'
import ButtonPrimary from './ButtonPrimary';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        >
           <div>
           <div className='mt-10 p-4'>
                <h3 className='text-primary text-center font-bold mt-4'>Contact Us</h3>
                <h1 className='text-xl text-center text-white'>Stay connected with us</h1>
            </div>
            <div className='text-center'>
                <form >
                    <input className='rounded p-1' type="text" placeholder='Email Address' />
                    <br />
                    <br />
                    <input className='rounded p-1' type="text" placeholder='Subject' />
                    <br />
                    <br />
                    <textarea className='rounded p-1 h-35 w-55' placeholder='Your message'></textarea>
                </form>
                <div className='p-4 mt-[-10px]'>
                <ButtonPrimary> Submit</ButtonPrimary>
                </div>
            </div>
           </div>
        </section>
    );
};

export default ContactUs;