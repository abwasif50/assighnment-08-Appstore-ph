

import React, { useEffect, useState } from "react";

import downloadPng from '../assets/assets/icon-downloads.png'
import ratingPng from '../assets/assets/icon-ratings.png'


import { toast } from "react-hot-toast";



const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); 

 
  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  
  const handleUninstall = (id, title) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));


    setInstalledApps(updatedApps);
    toast.success(`${title} uninstalled successfully!`);
  };

  
  const handleSort = (order) => {
    let sorted = [...installedApps];
    if (order === "low-high") {
      sorted.sort((a, b) => a.size - b.size);


    } else if (order === "high-low") {
      sorted.sort((a, b) => b.size - a.size);
    }
    setSortOrder(order);
    setInstalledApps(sorted);
  };

  if (installedApps.length === 0)


    return <div className="text-center mt-20 text-lg">No apps installed yet.</div>;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">My Installed Apps</h1>

      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
     
        <p className="text-lg font-medium">

          {installedApps.length} App{installedApps.length > 1 ? "s" : ""} Found
        </p>

        <select
          className="select select-bordered w-48 mt-3 md:mt-0"

          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort by Size</option>
          <option value="low-high">Size: Low → High</option>
          <option value="high-low">Size: High → Low</option>
        </select>
      </div>

  
      <div className="gap-8">
        {installedApps.map((app) => (
          <div
            
            className="lg:flex rounded-xl justify-between px-5 py-2 bg-base-100 items-center shadow-xl text-center m-5"
          >
            <div className="lg:flex items-center">
              <figure>
                <img
                  src={app.image}
                  className="h-40 w-40 object-cover rounded-xl mx-auto lg:mx-0"
                />
              </figure>
              <div className="card-body text-left">
                <h2 className="card-title">{app.title}</h2>
                <div className="flex gap-4 text-sm text-gray-600">
                  <p className="flex"><img className="h-6 w-6" src={downloadPng} alt="" />{app.downloads.toLocaleString()}M</p>
                  <p className="flex"><img className="h-6 w-6" src={ratingPng} alt="" />{app.ratingAvg}</p>
                  <p>{app.size} MB</p>
                </div>
              </div>
            </div>

            <div>
              <button
                className="btn bg-cyan-400 text-white hover:bg-cyan-500 mt-3 lg:mt-0"
                onClick={() => handleUninstall(app.id, app.title)}
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;


