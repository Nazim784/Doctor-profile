import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.description}</p>
                <div className='flex items-center'>
                    <div class=" avatar">
                        <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className='items-center text-center'>
                        <p>{review.name}</p>
                        <p>{review.country}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;