import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg'
import Services from './Services';
import MakeAppointment from './MakeAppointment';
import Reviews from './Reviews';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;