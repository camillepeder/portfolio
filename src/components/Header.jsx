
export default function Header() {
  function downloadResume() {
    // Create a dummy element
    var element = document.createElement('a');
    // Set the file's URL
    element.setAttribute('href', '../../public/files/CV-GonzaloPedernera.pdf');
    // Set the file's name
    element.setAttribute('download', 'CV - Gonzalo Pedernera.pdf');
    // Hide the element
    element.style.display = 'none';
    // Append the element to the body
    document.body.appendChild(element);
    // Trigger the click event
    element.click();
    // Clean up
    document.body.removeChild(element);
}
  return (
    <div className='flex flex-row gap-5 justify-between items-center w-full'>
      <div className='flex flex-row gap-5 jus items-center'>
      <div className="avatar">
        {/* <div className="w-16 h-16 rounded-full">
          <img src={icon} />
        </div> */}
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
