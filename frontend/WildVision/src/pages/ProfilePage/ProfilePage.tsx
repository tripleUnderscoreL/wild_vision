import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import Logo from "../../components/Logo/Logo"
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import "./ProfilePage.scss"
import { getToken, getUser } from "../../api"

const ProfilePage = (props: Props) => {

  const [file, setFile] = useState(null);
  function handleImgChange(e) {
    console.log(e.target.files);
    document.getElementById("profile-img").classList.add('profile-photo-uploaded');
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  console.log(getUser(getToken()));

  return (
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <div className="profile">
        <div className="profile-photo" >
          <input id="profile-img-input" onChange={handleImgChange} type="file"  className="profile-photo-input"/>
          <img id="profile-img" className="profile-photo-img" src={file === null ? "../../src/assets/profile-photo.png" : file}></img>
        </div>
        <button className="profile-edit">
          <img src="../../src/assets/edit.png"></img>
        </button>
        <section className="profile-info">
          <p>Логин</p>
          <section className="profile-contacts">
            <p>aaa@aa.aa</p>
            <p>+7(...) ... .. ..</p>
          </section>
          <p>Пароль</p>
          <p>Страна, Город, область</p>
          <section className="profile-discount">
            <p>Ваша личная скидка</p>
            <p>-5%</p>
          </section>
        </section>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ProfilePage;