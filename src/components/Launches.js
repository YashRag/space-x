import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Launches = () => {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    getLaunches();
  }, []);

  const getLaunches = async () => {
    const data = await fetch("https://api.spacexdata.com/v3/launches");
    const json = await data.json();
    // console.log(json);
    setLaunches(json);
  };

  if (!launches) return null;

  return (
    <div className="flex flex-wrap justify-between p-3 m-3">
      {launches.map(
        (launch, index) =>
          launch.links.mission_patch_small && (
            <Link key={index} to={"/launches/" + launch.flight_number}>
              <div className="border w-56 m-2 p-2 shadow-lg bg-gray-200 rounded-lg">
                <div>
                  <img
                    className="w-40"
                    src={launch.links.mission_patch_small}
                    alt="imf"
                  />
                </div>
                <div className="m-1 font-bold">
                  <ul>
                    <li>Mission: {launch.mission_name}</li>
                  </ul>
                </div>
              </div>{" "}
            </Link>
          )
      )}
    </div>
  );
};

export default Launches;
