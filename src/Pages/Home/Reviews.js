import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rcitationem.',
            img: people1,
            country: 'California'
        },
        {
            _id: 2,
            name: 'Natelia Portman',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rcitationem.',
            img: people2,
            country: 'Australia'
        },
        {
            _id: 3,
            name: 'Jonathon',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rcitationem.',
            img: people3,
            country: 'England'
        },
    ]

    return (
        <section>
            <div className='flex mt-10'>
                <div>
                    <h2 className='text-primary font-bold'>Testimonial</h2>
                    <h1 className='text-xl'>What Our Patient Says</h1>
                </div>
                <div className='relative h-64 w-64 flex-1'>
                    <img  class="absolute top-0 right-0 h-32 w-32" src={quote} alt="" />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5  '>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;