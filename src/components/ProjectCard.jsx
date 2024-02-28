import React from 'react';

export default function ProjectCard({ name, description, img, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='flex flex-col items-center p-5 m-5 z-10 rounded-2xl gap-5 group overflow-hidden hover:scale-105 transition-transform'>
      <div className='flex gradient justify-center min-padding rounded-2xl items-center'>
        <div className='flex flex-col justify-center items-center p-5 dark-mode-div rounded-2xl'>
          <div className='bg-white overflow-hidden px-5 mb-2 rounded-2xl'>
            <img src={img} alt={name} className='w-64 h-64 object-cover' />
          </div>
          <div className='flex flex-col items-center gap-5'>
            <div className='w-full p-2'>
              <h1 className='text-4xl'>{name}</h1>
            </div>
            <p className='text-xl description'>{description}</p>
            <p className='text-xl hover-description'>Hola</p>
          </div>
        </div>
      </div>
    </a>
  );
}


