import React, { useEffect, useState } from "react";
import './ReviewsPage.scss';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import ModalAddReview from "../../components/Modal/ModalAddReview/ModalAddReview";
import { fetchProducts } from "../../api";
interface Props {}

const ReviewsPage = (props: Props) => {

  const [reviews, setReviews] = useState<[]>([]);
    useEffect(() => {
      fetchProducts().then((data) => setReviews(data));
      console.log(reviews);
    }, []);
  console.log(reviews);
  return(
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <div className="reviews">
        <label>Отзывы</label>
        <ModalAddReview></ModalAddReview>
        {reviews.map(e => 
          (e.reviews !== [] ? e.reviews.map(review =>
          <ReviewCard name={review.user} date={review.created_at.slice(0, 10)} rating={review.rating} review={review.review_text} pros='все хорошо' cons='минусов не наблюдаю' images={review.image}></ReviewCard>
          ): null
        ))
        }
        
        {/* <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard> */}
      </div>
      <Footer></Footer>
    </>
  )
}

export default ReviewsPage;