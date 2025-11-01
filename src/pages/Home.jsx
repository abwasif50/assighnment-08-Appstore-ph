import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import AppCard from "../components/AppCard";

const Home = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await axios.get("/appData.json"); 
        setApps(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching apps:", error);
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  if (loading) {
    return <p className="text-center text-5xl mt-10">Loading...</p>;
  }

  return (
    <div className="py-3">
      {/* Banner */}
      <Banner />



<div className='bg-linear-to-r from-purple-600 to-violet-500 px-2  gap-4 text-white lg:px-50 space-y-8 py-14 '>
<h2 className='text-4xl text-center PX-auto font-bold '> Trusted by Millions, Built for You </h2>
<div className='grid grid-cols-1 lg:grid-cols-3 mx-auto text-center  gap-8'>



<div className='space-y-4 gap-4'>
    <p>Total downloads</p>
    <p className='text-5xl font-bold'>29.6 M</p>
    <p>21% more then last month</p>
</div>
<div className='space-y-4'>
    <p>Total reviews</p>
    <p className='text-5xl font-bold'>906k</p>
 
    <p>46% more then last month</p>
</div>
<div className='space-y-4'>
    <p>Active Apps</p>
    <p className='text-5xl font-bold'>132+</p>
    <p>31 more will launch</p>
</div>
</div>
</div>



<div className='space-y-5  py-10 items-center text-center'>
<h1 className='text-4xl font-bold'>Trending Apps</h1>

<p>Explore All Trending Apps on the Market developed by us</p>
</div>

     
      <section>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {apps.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/apps" className="btn bg-linear-to-r from-purple-600 to-violet-500 text-white text-xl">
            Show All
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
