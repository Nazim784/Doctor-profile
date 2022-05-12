import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import Service from './Service';
import ButtonPrimary from './ButtonPrimary';


const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Floride Treatement',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rcitationem.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rcitationem.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth whitening Treatement',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rcitationem.',
            img: whitening
        },
    ]
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'> Our services</h3>
                <h2 className='text-4xl'>Services we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            
                <div class="hero min-h-screen mt-7">
                    <div class="hero-content flex-col lg:flex-row space-x-10">
                        <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your trems</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                           <ButtonPrimary>Get Started</ButtonPrimary>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Services;