import HamburgerMenu from '../assets/hamb-menu.svg'
export default function MobileHeader() {
  return (
<div className="dropdown dropdown-bottom w-full h-full flex p-0 items-center gap-5">
  <div tabIndex={0} role="button" className="btn m-1 bg-transparent rounded-full h-full">
    <img src={HamburgerMenu} alt='menu' className='svg'/>
  </div>
  <ul tabIndex={0} className="dropdown-content z-[30] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a href='https://github.com/gonzalopedernera' target='_blank' rel='noreferrer'>Github</a></li>
    <li><a href="https://gonzalopedernera.github.io/portfolio/files/CV-GonzaloPedernera.pdf" target="_blank" rel="noreferrer">CV</a></li>
    <li><a href='https://www.linkedin.com/in/gonzalo-pedernera-286a6b27b/' target='_blank' rel='noreferrer'>Linkedin</a></li>
    <li><a href='mailto:gonzalopeder2@gmail.com' target='_blank' rel='noreferrer'>Send Mail</a></li>
  </ul>
  <div>
    <h1 className='text-2xl text-white'>Menu</h1>
  </div>
</div>
  )
}
