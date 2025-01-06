import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Logo from "../../components/Logo/Logo"
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import "./ProfilePage.scss"
import { getToken, getUser } from "../../api"
import { User } from "../../types"
import { Navigate } from "react-router-dom"

const ProfilePage = (props: Props) => {

  const [file, setFile] = useState(null);
  const [edit, setEdit] = useState<boolean>(false);

  function handleImgChange(e) {
    console.log(e.target.files);
    document.getElementById("profile-img").classList.add('profile-photo-uploaded');
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [user, setUser] = useState<User>();
  useEffect(() => {
      getUser(getToken()).then((data) => setUser(data));
  }, []);
  console.log(user);
  if (!edit){
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
          <section className="profile-buttons">
            <button className="profile-edit" onClick={() => setEdit(true)}>
              <img src="../../src/assets/edit.png"></img>
            </button>
            <button className="profile-edit" onClick={() => {localStorage.removeItem('authToken'); window.location.reload(); return <Navigate to="/" replace />;}}>
              <p>Выход</p>
            </button>
          </section>
          
          <section className="profile-info">
            <p>{user === undefined ? "Заполните данные" : user.username}</p>
            <section className="profile-contacts">
              <p>{user === undefined || user.email === null ? "Заполните данные" : user.email}</p>
              <p>{user === undefined || user.phone_number === null ? "Заполните данные" : user.phone_number}</p>
            </section>
            <p>**********</p>
            <p>{user === undefined || user.address === null ? "Заполните данные" : user.address}</p>
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
  else{
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
          <section className="profile-buttons">
            <button className="edit-active" onClick={() => setEdit(false)}>
              <img src="../../src/assets/edit.png"></img>
            </button>
            <button className="profile-edit" onClick={() => {localStorage.removeItem('authToken'); window.location.reload(); return <Navigate to="/" replace />;}}>
              <p>Выход</p>
            </button>
          </section>
          
          <section className="profile-info">
            <input placeholder={user!.username}></input>
            <section className="profile-contacts">
              <input placeholder={user === undefined || user.email === null ? "ваш email" : user.email}></input>
              <input placeholder={user === undefined || user.phone_number === null ? "ваш номер телефона" : user.phone_number}></input>
            </section>
            <input placeholder="**********"></input>
            <input placeholder={user === undefined || user.address === null ? "ваш адрес" : user.address}></input>
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
  
}

export default ProfilePage;