import AboutMe from './AboutMe'
import MobileAboutMe from './MobileAboutMe'

export default function HeroSection() {
  return (
    <div className='Hero-wrapper'>
      <div className='Hero gradient-div shadow-white shadow-md desktop-aboutme'>
        <AboutMe />
      </div>
      <div className='Hero gradient-div shadow-white shadow-sm mobile-aboutme'>
        <MobileAboutMe />
      </div>
  </div>
  )
}
