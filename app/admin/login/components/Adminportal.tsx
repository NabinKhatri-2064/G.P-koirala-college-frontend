import {  SquareArrowLeftIcon, SquareArrowRightExit, UserCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Adminportal() {
  return (
    <main className='w-full  z-10 '>
        <section className='w-full px-10 py-2 primary-bg-color'>
            <div className='flex justify-between'>
                <p className='flex text-sm text-white font-medium items-center gap-1'><UserCircle size={16}/>Administrator portal</p>
    <Link 
    className='flex gap-2 text-white text-sm  hover:cursor-pointer font-medium items-center'
    href="/">Back to website< SquareArrowRightExit size={16}/></Link>
            </div>
        </section>  
    </main>
  )
}

export default Adminportal
