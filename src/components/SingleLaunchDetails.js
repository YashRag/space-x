import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleLaunchDetails = () => {
   const {id} = useParams();
   const [launchDetails, setLaunchDetails] = useState([]);

   useEffect(()=>{
     getSingleLaunch();
     console.log(launchDetails);
   },[]);

   const getSingleLaunch = async ()=>{
      const data = await fetch('https://api.spacexdata.com/v3/launches/'+id);
      const json = await data.json();
      setLaunchDetails(json);
   //  console.log(json);
   }

   if(!launchDetails) return null;

  return (
    <div className='p-2 m-4'>
      <div className='flex grid grid-flow-col'>
         <div className='col-span-9 shadow-xl p-4 m-2'>
            <h1 className='font-bold text-blue-600'><u>LAUNCH DETAILS</u></h1>
            <ul>
                <li><span className='font-bold'>SITE NAME:</span> {launchDetails?.launch_site?.site_name}</li>
                <li><span className='font-bold'>YEAR:</span> {launchDetails.launch_year}</li>
                <li><span className='font-bold'>MISSION NAME:</span> {launchDetails.mission_name}</li>
            </ul>
        </div>
         <div className='flex col-span-3 items-center justify-center shadow-xl border-l-2 p-2 m-2'>
            <img className='w-36' src={launchDetails?.links?.mission_patch_small} alt={launchDetails?.links?.mission_patch_small} />
         </div>
      </div>
      <div className='m-3 p-3 shadow-xl'>
       <h1><u>Details</u></h1>
       <p className='ml-5'>{launchDetails.details ? launchDetails.details : 'No Details Available' }</p>
      </div>
    </div>
  )
}

export default SingleLaunchDetails
