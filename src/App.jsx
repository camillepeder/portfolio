import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectCard from './components/ProjectCard'
import IrisIcon from './assets/Iris.svg'

function App() {
  let IrisLong = `
  Iris is my first experience as a front-end developer and UX/UI designer, being this the final project of my journey through Holberton School.
  By including Iris here, i want to showcase my first approach on web design.
  `;


  return (
    <>
    <Header />
    <div className='justify-center items-center flex flex-col gap-5 py-5'>
      {/* Hero */}

        <HeroSection />
      <div className='m-5'>
        <h1 className='text-4xl'> My Projects</h1>
      </div>
      <div className='flex flex-row gap-10 justify-center items-center'>
        <ProjectCard name='Iris' description='Holberton School`s final project.' longDescription={IrisLong} img={IrisIcon} link='https://github.com/rociopallas/my-project'/>
        <ProjectCard name='Iris' description='Holberton School`s final project.' longDescription={IrisLong} img={IrisIcon} link='https://github.com/rociopallas/my-project'/>
      </div>
    </div>
    </>
  )
}

export default App