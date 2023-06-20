import './Profile.scss'
// eslint-disable-next-line react/prop-types
export default function Profile({avatarImg,name,bio,email,phone,githubUrl,linkedinUrl,twitterUrl}){
  return (
    <div className='container'>
    <img src={avatarImg} alt= {name} />
    <h1>{name}</h1>
    <hr />
    <p>{bio}</p>
    <hr />
    <p>{email}</p>
    <hr />
    <p>{phone}</p>
    <hr />
    <button><a href={githubUrl}></a>GitHub</button>
    <button><a href={linkedinUrl}></a>Linkedin</button>
    <button><a href={twitterUrl}></a>Twitter</button>
    </div>
  )
}