
export default function Header() {

  return (
    <div className='flex flex-row flex-wrap gap-5 justify-between items-center w-full'>
      <div className='flex flex-row gap-5 jus items-center'>
      <div className="avatar">
      </div>
        <h1>Camille Pedernera</h1>
      </div>

      <div className='flex flex-row gap-7 justify-center items-center'>
        <div className='justify-center items-center flex'>
          <a href='https://github.com/gonzalopedernera' target='_blank' rel='noreferrer'>Github</a>
        </div>
        {/* <button onClick={downloadResume}>Resume</button> */}
        <a href="https://camillepeder.github.io/portfolio/files/CV-CamillePedernera.pdf" target="_blank" rel="noreferrer">CV</a>
        <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn midbttn text-black m-0 customFont">Contact</div>
          <ul tabIndex={0} className="dropdown-content z-[15] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='https://www.linkedin.com/in/gonzalo-pedernera-286a6b27b/' target='_blank' rel='noreferrer'>Linkedin</a></li>
            <li><a href='mailto:camillepeder@gmail.com' target='_blank' rel='noreferrer'>Send Mail</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
