import Gridline from '@/app/Components/Gridlines'
import { bachelorPrograms, masterPrograms } from '@/app/data/course'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
  <main className='pt-10 max-w-7xl mx-auto '>
    <Gridline/>
    <section className='flex gap-4 flex-col  px-4 min-h-[70vh] justify-center  h-full'>
      <p className='tracking-wider primary-font-color'>ACADEMIC PROGRAMS</p>
      <p className='lg:text-6xl text-4xl font-bold primary-font-color '>Programs</p>
      <p className='max-w-2xl text-sm text-gray-500'>Discover programs designed to build knowledge, develop practical
              skills, and prepare you for the future.</p>
    </section>




    <section className='pt-10 px-4 flex flex-col gap-10 '>
      <div>
        <p className='primary-font-color font-semibold'>
          01/Under Graduate
        </p>
      </div>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {bachelorPrograms.map((bachelor) => (
                  <div
                    className="border-2 min-h-120 h-full hover:cursor-pointer rounded-md hover:-translate-y-3 transition-all duration-300"
                    key={bachelor.id}
                  >
                    <div className="relative w-full h-60  overflow-hidden">
                      <Image
                        src={bachelor.image}
                        width={500}
                        height={500}
                        alt="news-image"
                        className="object-cover w-full h-full rounded-md"
                      />
                      <p className="absolute top-2 left-2 bg-white p-2 rounded-md font-semibold primary-font-color text-xs ">
                        {bachelor.category}
                      </p>
                    </div>
                    <div className="relative flex flex-col px-4 pt-5 justify-evenly  max-h-62 h-full ">
                      <p className="primary-font-color font-semibold">{bachelor.title}</p>
                      <p className="text-sm">{bachelor.description}</p>
                        <div className=" rounded-md ">
                      <button className="primary-bg-color
                      hover:cursor-pointer w-full hover:bg-purple-950!  
                       rounded-md py-2 text-white">
                        Read More
                      </button>
                    </div>
                    </div>
                    
                  </div>
                ))}
              </div>
    </section>
    



    <section className='pt-10 px-4 flex flex-col gap-10 pb-12 '>
      <div>
        <p className='primary-font-color font-semibold'>
          02/Master Graduate
        </p>
      </div>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {masterPrograms.map((master) => (
                  <div
                    className="border-2 min-h-120 h-full hover:cursor-pointer rounded-md hover:-translate-y-3 transition-all duration-300"
                    key={master.id}
                  >
                    <div className="relative w-full h-60  overflow-hidden">
                      <Image
                        src={master.image}
                        width={500}
                        height={500}
                        alt="news-image"
                        className="object-cover w-full h-full rounded-md"
                      />
                      <p className="absolute top-2 left-2 bg-white p-2 rounded-md font-semibold primary-font-color text-xs ">
                        {master.category}
                      </p>
                    </div>
                    <div className="relative flex flex-col px-4 pt-5 justify-evenly  max-h-62 h-full ">
                      <p className="primary-font-color font-semibold">{master.title}</p>
                      <p className="text-sm">{master.description}</p>
                        <div className=" rounded-md ">
                      <button className="primary-bg-color
                      hover:cursor-pointer w-full hover:bg-purple-950
                       rounded-md py-2 text-white">
                        Read More
                      </button>
                    </div>
                    </div>
                    
                  </div>
                ))}
              </div>
    </section>
  </main>
  )
}

export default page
