
export default function Header() {
  function downloadResume() {
    var element = document.createElement('a');
    element.setAttribute('href', '/files/CV-GonzaloPedernera.pdf');
    element.setAttribute('download', 'CV - Gonzalo Pedernera.pdf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
  return (
    <div className='flex flex-row gap-5 justify-between items-center w-full'>
      <div className='flex flex-row gap-5 jus items-center'>
      <div className="avatar">
      </div>
        <h1>Gonzalo Pedernera</h1>
      </div>

      <div className='flex flex-row gap-7 justify-center align-center'>
        <div className='justify-center items-center flex'>
          <a href='https://github.com/gonzalopedernera' target='_blank' rel='noreferrer'>Github</a>
        </div>
        <button onClick={downloadResume}>Resume</button>
        <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn midbttn text-black m-0 customFont">Contact</div>
          <ul tabIndex={0} className="dropdown-content z-[15] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='https://www.linkedin.com/in/gonzalo-pedernera-286a6b27b/' target='_blank' rel='noreferrer'>Linkedin</a></li>
            <li><a href='mailto:gonzalopeder2@gmail.com' target='_blank' rel='noreferrer'>Send Mail</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
