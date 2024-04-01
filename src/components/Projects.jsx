import React from 'react'
import movies from '../assets/portfolio/movies.png'
import canvas from '../assets/portfolio/canvas.png'
import meditation from '../assets/portfolio/meditation.png'
import notes from '../assets/portfolio/notes.png'
import weather from '../assets/portfolio/weather.png'
import portfolio from '../assets/portfolio/portfolio.png'


const Projects = () => {

    const portfolios = [
        {
            id: 1,
            src: movies,
            text: "Movies Web App",
            demoHref: 'https://hmovies24.netlify.app/',
            codeHref: 'https://github.com/Harish24-S/HMovies_Project_CipherSchools/tree/main/movie-box'
        },
        {
            id: 2,
            src: notes,
            text: "Note-taking App",
            demoHref: 'https://harish24-s.github.io/Note-Hub/',
            codeHref: 'https://github.com/Harish24-S/Note-Hub'
        },
        {
            id: 3,
            src: canvas,
            text: "Canvas Paint App",
            demoHref: 'https://harish24-s.github.io/Paint-Canvas/',
            codeHref: 'https://github.com/Harish24-S/Paint-Canvas'
        },
        {
            id: 4,
            src: meditation,
            text: "Meditation Web App",
            demoHref: 'https://harish24-s.github.io/Relax-Audio-app/',
            codeHref: 'https://github.com/Harish24-S/Relax-Audio-app'
        },
        {
            id: 5,
            src: weather,
            text: "Weather App",
            demoHref: 'https://harish24-s.github.io/Weather-using-JS/',
            codeHref: 'https://github.com/Harish24-S/Weather-using-JS'
        },
        {
            id: 6,
            src: portfolio,
            text: "Personal Portfolio",
            demoHref: 'https://github.com/Harish24-S',
            codeHref: 'https://github.com/Harish24-S/portfolio'
        },
    ]

  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen py-10 md:py-1'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 px-12 sm:px-0 gap-8'>
                {portfolios.map(({id, src, text, demoHref, codeHref}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                        <a href={demoHref} className="relative bg-gray-950 ">
                            <img src={src} alt='' className='absolute opacity-50 rounded-md duration-200 hover:scale-105' />

                            <div className="relative p-5">
                                <div className="mt-20">
                                    <div className="transition-all transform translate-y-8 opacity-100 ">
                                        <div class="p-2">
                                            <p class="text-2xl font-bold text-white">{text}</p>
                                    
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </a>
                        
                        <div className='flex items-center justify-center'>
                            <a href={demoHref} target='_blank' rel="noreferrer">
                                <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 font-bold'>Demo</button>
                            </a>
                            <a href={codeHref} target='_blank' rel="noreferrer">
                                <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                ))}
                
            </div>

        </div>
    </div>
  )
}

export default Projects