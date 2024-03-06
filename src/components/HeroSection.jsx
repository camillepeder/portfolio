import AboutMe from './AboutMe'

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-start items-center gap-5 my-5 w-full shadow-white shadow-sm rounded-2xl z-10 border-2 border-white">
      <div className='p-7 flex flex-col gap-5 justify-center items-center rounded-2xl gradient-div'>
        <AboutMe />
      </div>
  </div>
  )
}
