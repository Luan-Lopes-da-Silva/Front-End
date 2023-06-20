import Profile from "./components/Profile/Profile";
import Img1 from "./assets/AVATAR.JPG"
import Img2 from "./assets/339898487_268972918787205_8862952992311913978_n.JPG"

// eslint-disable-next-line react/prop-types
export default function App() {
  return(
    <>
    <Profile avatarImg={Img1} name={"Luan Lopes"} bio={'Front-end developer'} phone={'+5511987654321'} email={'gamekiller28@gmail.com'} githubUrl={'https://github.com/Luan-Lopes-da-Silva?tab=repositories'} linkedinUrl={'https://www.linkedin.com/in/luan-lopes-84a75716a/'} twitterUrl={'https://twitter.com/Luanzinhow3'}/>
    <Profile avatarImg={Img2} name={"Caio Souza"} bio={'Front-end developer'} phone={'+5511987654321'} email={'gamekiller28@gmail.com'} githubUrl={'https://github.com/Luan-Lopes-da-Silva?tab=repositories'} linkedinUrl={'https://www.linkedin.com/in/luan-lopes-84a75716a/'} twitterUrl={'https://twitter.com/Luanzinhow3'}/>
    </>
  )  
}


