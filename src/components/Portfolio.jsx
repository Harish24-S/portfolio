import React from 'react'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import arrayDesrtuct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: reactWeather,
            demoHref: 'https://github.com/Harish24-S',
            codeHref: 'https://www.linkedin.com/in/harish-sarika/'
        },
        {
            id: 2,
            src: reactSmooth,
            demoHref: 'https://github.com/Harish24-S',
            codeHref: 'https://www.linkedin.com/in/harish-sarika/'
        },
        {
            id: 3,
            src: reactParallax,
            demoHref: 'https://github.com/Harish24-S',
            codeHref: 'https://github.com/Harish24-S'
        },
        {
            id: 4,
            src: arrayDesrtuct,
            demoHref: 'https://github.com/Harish24-S',
            codeHref: 'https://github.com/Harish24-S'
        },
        {
            id: 5,
            src: installNode,
            demoHref: 'https://github.com/Harish24-S',
            codeHref: 'https://github.com/Harish24-S'
        },
        {
            id: 6,
            src: navbar,
            demoHref: 'https://github.com/Harish24-S',
            codeHref: 'https://github.com/Harish24-S'
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 px-12 sm:px-0 gap-8'>
                {portfolios.map(({id, src, demoHref, codeHref}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href={demoHref} target='_blank' rel="noreferrer">
                                <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105'>Demo</button>
                            </a>
                            <a href={codeHref} target='_blank' rel="noreferrer">
                                <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105'>Code</button>
                            </a>
                        </div>
                    </div>
                ))}
                
            </div>

        </div>
    </div>
  )
}

export default Portfolio