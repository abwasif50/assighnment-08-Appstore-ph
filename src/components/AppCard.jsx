import React from "react";
import { useNavigate } from "react-router-dom";
import downloadPng from '../assets/assets/icon-downloads.png'
import ratingPng from '../assets/assets/icon-ratings.png'


const AppCard = ({ app, showInstallButton = false, onInstall, isInstalled }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
      onClick={() => navigate(`/apps/${app.id}`)}
    >
      <img src={app.image} alt={app.title} className="w-full h-40 object-contain p-4 bg-gray-50" />

  
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{app.title}</h2>

        <div className="flex justify-between">

          
        <p className="p-1 rounded-xl text-[#00D390] text- font-bold bg-[#F1F5E8] flex mb-2"> <img className="w-5 h-5" src={ downloadPng} alt="" />{app.downloads.toLocaleString()}M</p>
        <p className="text-yellow-500 font-bold p-1 rounded-xl bg-[#FFF0E1] flex mb-2" > <img className="w-5 h-5" src={ratingPng} alt="" /> {app.ratingAvg}</p>
</div>

       
        {showInstallButton && (
          <button
            className={`btn btn-sm w-full ${
              isInstalled ? "btn-disabled" : "btn-primary"
            }`}
            onClick={(e) => {
              e.stopPropagation();





              if (!isInstalled) onInstall(app);
            }}
          >
            {isInstalled ? "Installed" : "Install"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AppCard;