import Footer from "../../components/Footer/Footer"
import Logo from "../../components/Logo/Logo"
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import "./ProfilePage.scss"

const ProfilePage = (props: Props) => {
  return (
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <div className="profile">
        <div className="profile-photo">
          <input type="file" className="profile-photo-input"/>
          <img className="profile-photo-img" src="../../src/assets/profile-photo.png"></img>
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