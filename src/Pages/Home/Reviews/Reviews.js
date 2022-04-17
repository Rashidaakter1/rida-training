import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const reviewsData = [
        {
            "id": 1,
            "name": "Mikasa ",
            "img": "https://i.ibb.co/5L8nZKc/review-3.png",

            "description": "Rida's Training and Fitness always delivers a challenging workout that will renew confidence in your body. Little equipment needed, challenging movements, keeps me on my toes. "

        },
        {
            "id": 2,
            "name": "Adam Smith",
            "img": "https://i.ibb.co/yVKkNPL/review-2.png",

            "description": "I look forward to every workout. During the lockdown I was so happy I was introduced to Rida, and as a stay at home mom I'm so thankful that I could train with her from the comfort of my own home."

        },
        {
            "id": 3,
            "name": "Eren Jagear",
            "img": "https://i.ibb.co/g9QVPjh/review-1.png",

            "description": "At first I was hesitant as I thought the workouts were only geared towards women. After 7 months of consistent training, I have become fitter and felt better. Thank you Rida."

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