import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Rockets = () => {
  const [allrockets, setRockets] = useState([]);

  useEffect(() => {
    getLaunches();
  }, []);

  console.log(allrockets);

  const getLaunches = async () => {
    const data = await fetch("https://api.spacexdata.com/v3/rockets");
    const json = await data.json();
    // console.log(json);
    setRockets(json);
  };

  if (!allrockets) return null;

  return (
    <div className="flex flex-wrap justify-between p-3 m-3">
    
    {/* {
      console.log(allrockets.map(a => a.description))
    } */}
      {allrockets.map(
        (rocket) =>
           (
            <Link key={rocket.id} to={"/rockets/" + rocket?.rocket_id}>
              <div className="border w-56 m-2 p-2 shadow-lg bg-gray-200 rounded-lg">
                <div>
                  <img
                    className="w-40"
                    src={rocket?.flickr_images[0]}
                    alt="imf"
                  />
                </div>
                <div className="m-1 font-bold">
                  <ul>
                    <li>Rocket: {rocket?.rocket_name}</li>
                  </ul>
                </div>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default Rockets;
