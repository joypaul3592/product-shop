import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className=' bg-slate-700 py-16'>
            {
                reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default Review;