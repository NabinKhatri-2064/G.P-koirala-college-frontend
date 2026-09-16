import {  SquareArrowLeftIcon, SquareArrowRightExit, UserCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Adminportal() {
  return (
    <main className='w-full  z-10 '>
        <section className='w-full px-10 py-2 '>
            <div className='flex justify-between'>
                <p className='flex primary-font-color font-medium'><UserCircle/>Administrator portal</p>
    <Link 
    className='flex primary-font-colo hover:text-purple-950! hover:cursor-pointer font-medium'
    href="/">Back to website< SquareArrowRightExit/></Link>
            </div>
        </section>  
    </main>
  )
}

export default Adminportal
