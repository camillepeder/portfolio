import photo from '../assets/Photo.png'
import Badges from './Badges'
export default function AboutMe() {
  return (
    <div className='flex flex-row justify-center items-center gap-5 p-5 text-black '>
      <div className='flex flex-col justify-center gap-5 bg-transparent'>
        <h1 className='text-4xl text-left text-gray-600 left-0 pl-6'>
          About me
        </h1>
        <div className=' text-left text-2xl gap-7'>
          <div className='px-5 my-5'>
            <p>
              I am a software engineer with a growing passion for software developement.
              Having studied Computer Science Foundations at Holberton School Uruguay, I am now looking to grow my skills,
              while i keep working to improve my knowledge in new technologies.
            </p>
          </div>
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
