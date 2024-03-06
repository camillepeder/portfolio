import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectCard from './components/ProjectCard'
import IrisIcon from './assets/Iris.svg'

function App() {
  return (
    <>
    <Header />
    <div className='justify-center items-center flex flex-col gap-5 py-5'>
      {/* Hero */}

        <HeroSection />
      <div>
        <h1 className='text-4xl'> My Projects</h1>
      </div>
      <div className='flex flex-row gap-5 items-center'>
        <ProjectCard name='Iris' description='Holberton School`s final project.' img={IrisIcon} link='https://github.com/rociopallas/my-project'/>
      </div>
    </div>
    </>
  )
}

export default App