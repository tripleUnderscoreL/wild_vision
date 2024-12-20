import React from "react";
import './ReviewsPage.scss';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import ModalAddReview from "../../components/Modal/ModalAddReview/ModalAddReview";
interface Props {}

const ReviewsPage = (props: Props) => {

  const reviews = [
    {
      name: "Екатерина",
      date: "15.10.2021",
      rating: 5,
      review: "Очень классный товар лайк подписка лайк",
      pros: "заебися",
      cons: "нихуево",
      images: [
        "../../src/assets/shopping-bag.png",
        "../../src/assets/shopping-bag.png",
        "../../src/assets/shopping-bag.png",
        "../../src/assets/shopping-bag.png",
      ]
    }
  ]

  return(
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <div className="reviews">
        <label>Отзывы</label>
        <ModalAddReview></ModalAddReview>
        {reviews.map(e => (<ReviewCard name={e.name} date={e.date} rating={e.rating} review={e.review} pros={e.pros} cons={e.cons} images={e.images}></ReviewCard>))}
        
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