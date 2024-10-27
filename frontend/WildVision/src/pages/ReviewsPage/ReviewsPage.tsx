import React from "react";
import './ReviewsPage.scss';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
interface Props {}

const ReviewsPage = (props: Props) => {
  return(
    <>
      <NavBar></NavBar>
      <p className="wv">WildVision</p>
      <SearchBar></SearchBar>
    </>
  )
}

export default ReviewsPage;