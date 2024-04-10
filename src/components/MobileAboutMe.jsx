import photo from '../assets/Photo.png'
import Badges from './Badges'

export default function MobileAboutMe() {
  return (
    <div className='About-wrapper'>
      <div className='About'>
        <h1>
          About me
        </h1>
        <div className='Description'>
          <div>
            <img src={photo} className='Photo'/>
          </div>
          <p>
            I am a software developer with a growing passion for software developement and computer science.
            Having studied Computer Science Foundations at Holberton School Uruguay, I am now looking to grow my skills,
            while i keep working to improve my knowledge in new technologies.
          </p>
          </div>   
        <div>
          <Badges/>
        </div>
      </div>
    </div>

  )
}
