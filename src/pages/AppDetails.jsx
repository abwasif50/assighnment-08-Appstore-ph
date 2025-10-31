import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import downloadPng from '../assets/assets/icon-downloads.png'
import ratingPng from '../assets/assets/icon-ratings.png'
import IconRiviwe from '../assets/assets/icon-review.png'


import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  CartesianGrid } from "recharts";
import { toast } from "react-hot-toast";
import ErrorApp from "./ErrorApp";



const AppDetails = () => {
  const { id } = useParams();

  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/appData.json")
      .then((res) => {
        const foundApp = res.data.find((item) => item.id === parseInt(id));
        setApp(foundApp);
        setLoading(false);


        if (foundApp) {
          const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
          const alreadyInstalled = installedApps.some(a => a.id === foundApp.id);
          setInstalled(alreadyInstalled);
        }
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleInstall = () => {
    if (!app) return;
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

    const updatedApps = [...installedApps, app];


    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalled(true);

    toast.success(`${app.title} installed successfully!`);
  };

  if (loading)
    return (


      <div className="flex flex-col justify-center items-center h-screen">

        <span className="loading loading-spinner loading-lg text-primary"></span>

        <p className="mt-4 text-lg text-gray-500">Loading App Details...</p>
      </div>
    );

 if (!app) return <ErrorApp />;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">

      <div className="flex flex-col md:flex-row items-center gap-8">
       
        <img src={app.image} alt={app.title} className="w-60 h-60 object-cover rounded-2xl shadow-md" />

       
        <div className="flex-1 space-y-3">

          <h2 className="text-3xl font-bold">{app.title}</h2>
          <p className="text-gray-500">{app.companyName}</p>

          <div className="flex gap-5 py-6 border-t">
<div className="space-y-3">
         <img src={downloadPng} alt="" />
          <p>Downloads</p> 
          <p className="font-extrabold text-xl">{app.downloads.toLocaleString()}M</p>
          </div>
<div className="space-y-3">

        <img src={ratingPng} alt="" />
          <p>Average Rating</p>
           <p className="font-extrabold text-xl"> {app.ratingAvg}</p>
</div>

<div className="space-y-3">
<img src={IconRiviwe} alt="" />
          <p>Reviews</p>

           <p className="font-extrabold text-xl">{app.reviews.toLocaleString()}K</p>
</div>

</div>

          

         
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn ${installed ? "btn-succes" : "btn-primary bg-[#00d390]"} mt-2`}
          >
            {installed ? "Installed" : "Install Now"} ({app.size} MB)
          </button>

        </div>
      </div>

     

    
      <div className="mt-12">
        <h3 className="text-5xl font-semibold mb-4 ">
        Ratings
        </h3>
        <div className="w-full h-80 bg-base-200 rounded-xl border p-4">


          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={app.ratings}
              layout="vertical" 


              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" barSize=
              
              {30} radius={[6, 6, 6, 6]} />
            </BarChart>


          </ResponsiveContainer>
        </div>

      </div>


      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-2">Description</h3>
        <p className="text-gray-600 ">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;