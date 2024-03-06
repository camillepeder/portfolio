

export default function ProjectCard({ name, description, longDescription, img, link }) {

  const btnRedirect = () => {
    window.open(link, '_blank')
  }

  return (
    <div>
      {/* Card container div */}
      <div className='text-black card-container relative border-4 border-white rounded-2xl overflow-hidden hoverControl'>
        {/* Card content div */}
        <div className='card-content'>
          {/* Card content wrapper */}
          <div className=' h-full flex flex-col justify-between items-center gap-5 bg-white bg-opacity-20 rounded-2xl'>
            {/* Card image */}
            <div className='bg-white rounded-xl w-full h-full flex justify-center items-center py-2'>
              <img src={img} alt={name} className='w-72 h-72' />
            </div>
          </div>
        </div>
        {/* Hover div */}
        <div className=' cardDescription w-full h-full top-0 absolute bg-black rounded-2xl backdrop-blur-md -right-full p-2'>
          <div className='text-xl text-white p-2 flex flex-col gap-10 justify-between items-center'>
            <div className='flex flex-col justify-between text-left px-3 py-1 gap-7'>
              <div className="flex flex-col justify-center items-center">
                <h1 className='text-4xl uppercase'>{name}:</h1>
                <p className=' whitespace-pre-line break-words'>{longDescription}</p>
              </div>
              <button className="btn btn-neutral w-2/5 customFont" onClick={btnRedirect}>Go to project</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

  )
}


