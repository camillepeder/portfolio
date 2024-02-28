import photo from '../assets/Photo.png'
import Badges from './Badges'
export default function AboutMe() {
  return (
    <div className='flex flex-row justify-center items-center gap-5 p-5 text-black'>
      <div className='flex flex-col justify-center items-center gap-5 bg-transparent'>
        <h1 className='text-3xl text-left'>
          About me
        </h1>
        <div className=' text-left text-2xl'>
          <p>
            I am a software engineer with a growing interest for front-end development and UX/UI design.
            Having studied computer science foundations at Holberton School, I am now looking to grow my skills,
            while i keep working to improve my knowledge in new technologies.
          </p>
        <div>
          <Badges/>
        </div>
      </div>
    </div>
    <div className="">
      <img src={photo} className=''/>
    </div>
  </div>
  )
}
