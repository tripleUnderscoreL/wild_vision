import React from "react";
import './ReviewsPage.scss';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../../components/Logo/Logo";
interface Props {}

const ReviewsPage = (props: Props) => {
  return(
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
    </>
  )
}

export default ReviewsPage;