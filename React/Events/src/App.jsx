import Profile from "./components/Profile/Profile";
import Img1 from "./assets/AVATAR.JPG"
import ProfileSection from "./components/ProfileSection";
import Title from "./components/Title";
import style from "./app.module.scss"

// eslint-disable-next-line react/prop-types
export default function App() {
  function follow(){
  alert('Obrigado você acabou de me seguir')
  }
  return(
    <>
    <Profile>
        <Title>
          <img src={Img1} alt={Img1} />
          <h1>Luan Lopes</h1>
          <button className={style.flBtn} onClick={follow}>Follow</button>
        </Title>
      <ProfileSection>
        <Title>
          <span>Front end developer</span>
        </Title>
      </ProfileSection>
      <ProfileSection>
        <Title>
          <span>+5599999-9999</span>
        </Title>
      </ProfileSection>
      <ProfileSection>
        <Title>
          <span>luanlopes@outlook.com</span>
        </Title>
      </ProfileSection>
      <ProfileSection
      className = {style.btns}
      >
        <Title>
          <button className={style.medBtn}>Github</button>
          <button className={style.medBtn}>Linkedin</button>
          <button className={style.medBtn}>Twitter</button>
        </Title>
      </ProfileSection>
    </Profile>
    </>
  )  
}


