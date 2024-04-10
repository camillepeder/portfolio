
export default function ProjectCard({ name, description, img, link }) {

  const btnRedirect = () => {
    window.open(link, '_blank')
  }

  return (
      <div className='card-wrapper hoverControl'>
        {/* Card content div */}
        <div className='card-content'>
          {/* Card content wrapper */}
          <div className=' h-full flex flex-col justify-between items-center gap-5 bg-white bg-opacity-20 rounded-2xl'>
            {/* Card image */}
            <div className='card-image'>
              <img src={img} alt={name} />
            </div>
          </div>
        </div>
        {/* Hover div */}
        <div className=' card-description backdrop-blur-md'>
          <div className=' text-white p-2 flex flex-col gap-10 justify-center items-center'>
            <div className='flex flex-col justify-between text-left px-3 py-1 gap-7 card-text'>
              <div className="flex flex-col justify-center items-center top-0 h-full">
                <h1 className='text-4xl uppercase'>{name}:</h1>
                <p className=' whitespace-pre-line break-words'>{description}</p>
              </div>
              <button className="btn btn-neutral w-2/5 customFont" onClick={btnRedirect}>Go to project</button>
            </div>
          </div>
        </div>
      </div>
  )
}


