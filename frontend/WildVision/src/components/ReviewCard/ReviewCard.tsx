import "./ReviewCard.scss";
import { Review } from "../../types";

const ReviewCard = ( review: Review) => {
  return (
    <>
      <div className="review-card">
        <section className="review-info">
          <p>{review.name}</p>
          <p>{review.date}</p>
          <img src="../../src/assets/5star.png"></img>
        </section>
        <p>{review.review}</p>
        <section className="review-pros">
          <p>Достоинства:</p>
          <p>{review.pros}</p>
        </section>
        <section className="review-cons">
          <p>Недостатки:</p>
          <p>{review.cons}</p>
        </section>
      </div>
      <div className="review-gallery">
        {/* {review.images {/*.length > 0 ? review.images.map(e => (<img src={e}></img>)): null*/}
        <img src={review.images}></img>
        { review.images !== null  ? 
          <button><img src="../../src/assets/right-arrow.png"></img></button>
          : null
        }
        
      </div>  
    </>
    
  )
}
ReviewCard.defaultProps = { name: "", date: "", rating: 0, review: "", pros: "", cons: "", images: []}

export default ReviewCard; 