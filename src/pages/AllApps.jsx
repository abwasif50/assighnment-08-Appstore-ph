import React, { useEffect, useState } from "react";
import axios from "axios";
import AppCard from "../components/AppCard";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await axios.get("/appData.json");
        setApps(res.data);
        setFilteredApps(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchApps();
  }, []);


  useEffect(() => {
    const filtered = apps.filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [search, apps]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (



    <div className="space-y-6 px-4">

      <div className='space-y-5 items-center text-center'>
<h1 className='text-4xl font-bold'> Our All Applications</h1>

<p>Explore All Trending Apps on the Market developed by us</p>
</div>

      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">
          All Apps ({filteredApps.length})
        </h2>



        <input
          type="text"
          placeholder="Search apps..."
          className="input input-bordered"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>



      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;