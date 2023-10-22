import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div className='grid grid-flow-col shadow-lg bg-black text-white'>
      <div className='col-span-2'>
       <Link to="/"><img className='w-72' src="https://www.liblogo.com/img-logo/sp333s8d6-spacex-logo-spacex-logo-image-credit-spacex-spaceflight-insider.png" alt="LOGO" /></Link> 
      </div>
      <div className='flex col-span-10 items-center justify-end p-3'>
        <ul className='flex justify-end '>
           <li className='m-2 font-bold text-lg'><Link to="/launches">LAUNCHES</Link> </li>
            <li className='m-2 font-bold text-lg'><Link to="/rockets">ROCKETS</Link></li>
            <li className='m-2 font-bold text-lg'>PAYLOADS</li>
            <li className='m-2 font-bold text-lg'>CAPSULES</li>
            <li className='m-2 font-bold text-lg'>MISSIONS</li>
        </ul>
      </div>
    </div>
  )
}

export default Head
