import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.description}</p>
                <div className='flex mt-5'>
                    <div class="flex-1 avatar">
                        <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className='flex-1 items-center text-center'>
                        <p>{review.name}</p>
                        <p>{review.country}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;