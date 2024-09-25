import Header from './Header'
import MobileHeader from './MobileHeader'
import HeroSection from './HeroSection'
import ProjectCard from './ProjectCard'
import IrisIcon from '../assets/Iris.svg'
import ToDoIcon from '../assets/ToDo.png'

function Wrapper() {
  let Iris = `
  Iris is my first experience as a front-end developer and UX/UI designer, being this the final project of my journey through Holberton School.
  By including Iris here, i want to showcase my first approach on web design.
  `;

  let ToDo = `
  This is a ToDo project made fully with React. With it, you can create, visualize, edit and delete tasks, displayed on a list.
  This project is a little demonstrartion of my habilities as a front-end developer.
  `;


  return (
    <>
    <div className='desktop-header'>
      <Header />
    </div>
    <div className='mobile-header'>
      <MobileHeader/>
    </div>
      {/* Hero */}
        
        <HeroSection />
      <div className='m-5'>
        <h1 className='text-4xl text-white'> My Projects</h1>
      </div>
      <div className='grid-control'>
        <div className='project-wrapper'>
          <ProjectCard name='Iris' description={Iris} img={IrisIcon} link='https://youtu.be/aFq4CJf55Ek'/>
          <ProjectCard name='ToDo' description={ToDo} img={ToDoIcon} link='https://github.com/camillepeder/ToDo'/>
        </div>
      </div>
    </>
  )
}

export default Wrapper