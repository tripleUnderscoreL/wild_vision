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
  return(
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <div className="reviews">
        <label>Отзывы</label>
        <ModalAddReview></ModalAddReview>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ReviewsPage;