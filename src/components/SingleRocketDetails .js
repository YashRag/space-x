import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleRocketDetails = () => {
   const {id} = useParams();
   const [launchDetails, setLaunchDetails] = useState([]);

   useEffect(()=>{
     getSingleLaunch();
     console.log(launchDetails);
   },[]);

   const getSingleLaunch = async ()=>{
      const data = await fetch('https://api.spacexdata.com/v3/rockets/'+id);
      const json = await data.json();
      setLaunchDetails(json);
   //  console.log(json);
   }

   if(!launchDetails) return null;

  return (
    <div className='p-2 m-4'>
      <div className='flex grid grid-flow-col'>
         <div className='col-span-9 shadow-xl p-4 m-2'>
            <h1 className='font-bold text-blue-600'><u>ROCKET DETAILS</u></h1>
            <ul>
                <li><span className='font-bold'>ROCKET NAME:</span> {launchDetails?.rocket_name}</li>
                <li><span className='font-bold'>YEAR:</span> {launchDetails.first_flight}</li>
                <li><span className='font-bold'>MISSION NAME:</span> {launchDetails.rocket_name}</li>
            </ul>
        </div>
         <div className='flex col-span-3 items-center justify-center shadow-xl border-l-2 p-2 m-2'>

            <img className='w-36' src={launchDetails.flickr_images} alt={launchDetails.rocket_name} />

            {/* {console.log(launchDetails?.flickr_images[0])} */}
         </div>
      </div>
      <div className='m-3 p-3 shadow-xl'>
       <h1><u>Details</u></h1>
       <p className='ml-5'>{launchDetails.description ? launchDetails.description : 'No Details Available' }</p>
      </div>
    </div>
  )
}

export default SingleRocketDetails;
