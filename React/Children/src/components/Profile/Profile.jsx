import ProfileSection from '../ProfileSection'
import Title from '../Title'
import './Profile.scss'
// eslint-disable-next-line react/prop-types
export default function Profile({avatarImg,name,bio,email,phone,githubUrl,linkedinUrl,twitterUrl}){
  return (
    <div className='container'>
    <img src={avatarImg} alt= {name} />
    <Title>{name}</Title>
    <hr />
    <ProfileSection>{bio}</ProfileSection>
    <hr />
    <ProfileSection>{email}</ProfileSection>
    <hr />
    <ProfileSection>{phone}</ProfileSection>
    <hr />
    <ProfileSection>
    <button><a href={githubUrl}></a>GitHub</button>
    <button><a href={linkedinUrl}></a>Linkedin</button>
    <button><a href={twitterUrl}></a>Twitter</button>
    </ProfileSection>
  
    </div>
  )
}