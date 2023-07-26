import Image from 'next/image'
import style from './page.module.scss'
import Card from '@/components/Card'

export default function Home() {
  return (
  <div className={style.container}>
  <header className={style.nav}>
  <nav>
  <Image
  src='/logo.svg'
  width={128}
  height={20}
  alt='image'
  />
  <ul>
  <li>About</li>
  <li>Discover</li>
  <li>Get started</li>  
  </ul>  
  </nav>
  </header>
    <div className={style.firstCard}>
    <Image
    className={style.logo}
    src='/logo-mastercraft.svg'
    width={56}
    height={56}
    alt='logo'
    />  
    <h1>Mastercraft Bamboo Monitor Riser</h1>
    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
    <div className={style.buttons}>
      <button>Back this project</button>
      <div className={style.btnCustom}>
      <Image
      src='/icon-bookmark.svg'
      width={44}
      height={44}
      alt='icon-bookmark'
      />  
      <span>Bookmark</span>
      </div>
    </div> 
    </div>
    <div className={style.secondCard}>
    <div className={style.collumnsContainer}>
      <div className={style.collumn}>
      <h1>$89,914</h1>
      <p>of $100,000 backed</p>
      </div>
      <div className={style.collumn}>
      <h1>5,007</h1>
      <p>total backers</p>
      </div>
      <div>
      <h1>56</h1>
      <p>days left</p>
      </div>
    </div>
    <div className={style.progress}></div>  
    </div>
    <main className={style.about}>
      <div className={style.presentation}>
        <h3>About this project</h3>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
      </div>
      <div className={style.cards}>
        <Card
        plan='Bamboo Stand'
        price='Pledge $25 or more'
        content='You get an ergonomic stand made of natural bamboo. You´ve helped us launch our promotional campaign, and you´ll be added to a special Backer member list.'
        units='101'
        />
         <Card
        plan='Black Edition Stand '
        price='Pledge $75 or more'
        content='You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
        units='64'
        />
        <Card
        plan='Mahogany Special Edition'
        price='Pledge $200 or more'
        content='You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
        units='0'
        />
      </div>
    </main>
    </div>
  )
}
