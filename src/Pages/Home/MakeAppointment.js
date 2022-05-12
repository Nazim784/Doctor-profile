import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import ButtonPrimary from './ButtonPrimary';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-8 '>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an a apppintment</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore dolor repellendus, placeat, fugiat accusamus, molestias in laudantium cumque at quasi ab veritatis voluptate repellat quo praesentium facere. Qui, similique.</p>
                <div className='py-5'>
                <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </section>
        
    );
};

export default MakeAppointment;