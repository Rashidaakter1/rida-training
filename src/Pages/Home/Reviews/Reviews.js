import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const reviewsData = [
        {


            "id": 1,
            "name": "Rashida Akter",
            "img": "https://i.ibb.co/jRGcDVx/weight-train.png",

            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore perferendis ipsa voluptatum alias, nisi quia a consequuntur mollitia autem."

        },
        {
            "id": 2,
            "name": "Adam Smith",
            "img": "https://i.ibb.co/jRGcDVx/weight-train.png",

            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore perferendis ipsa voluptatum alias, nisi quia a consequuntur mollitia autem."

        },
        {
            "id": 3,
            "name": "Sara Mehjabin",
            "img": "https://i.ibb.co/jRGcDVx/weight-train.png",

            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore perferendis ipsa voluptatum alias, nisi quia a consequuntur mollitia autem."

        },
    ]
    return (
        <div>
            <h1 className='text-center mt-4 mb-4'>Reviews From People </h1>
            <div className="container">
                <div className="row gy-4">
                {
                    reviewsData.map(review=><Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
                </div>
            </div>
        </div>
    );
};

export default Reviews;