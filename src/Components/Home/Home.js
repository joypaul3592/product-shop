import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const naviget = useNavigate()
    const [reviews, setReviews] = useReviews();
    return (
        <div className="header-container">
            <div className='bg-gray-900  items-center justify-between home-container'>
                <div className="text-white text-info">
                    <h1 className='text-7xl mb-10 font-semibold font-mono text-amber-500 '> <span className=' text-green-200'>Capture</span> <br /> Your Moment</h1>
                    <h2 className='text-xl mt-2 mb-6 text-amber-300 tracking-widest opacity-70'>With This beautyFull Camera</h2>
                    <p>"Designing professional cameras is important to keep in mind several ergonomic and functional <br />
                        requirements coming from professional photographers. To fit these requirements, we start our design <br />
                        research from technical layout developing new ideas under the point of view of ergonomics, function, and style. <br />
                        The goal is to finalize them into an innovative but functional product."</p>
                    <button className='px-6 py-2 my-5 font-semibold rounded bg-amber-500'>Learn More</button>
                </div>
                <div className="img-container ">
                    <img src="https://freepngimg.com/thumb/camera/24673-5-photo-camera.png" alt="" />
                </div>
            </div>
            <div className="review-container bg-slate-600 py-12">
                <h1 className='text-3xl text-center font-semibold text-green-100 mb-16'>Ous Customars Say's</h1>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
                <div className="text-center">
                    <button onClick={() => naviget('/review')} className='px-6 py-2 my-5 font-semibold rounded bg-amber-500'>See All Reviews</button>
                </div>
            </div>
        </div>

    );
};

export default Home;