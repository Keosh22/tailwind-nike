import { reviews } from "../constants/index";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl text-center font-bold font-palanquin">What Our <span className="text-coral-red">Customers</span> Say?</h3>
      <p className="text-lg font-montserrat info-text mt-4 text-center max-w-lg m-auto">Hear genuine stories from our satisfied customers about their exceptional experiences with us!</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} 
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews