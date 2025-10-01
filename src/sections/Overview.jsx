import React from 'react';
import image from '../assets/gallery/image7.png';
import Button from '../components/button/buttonMain';

// Overview Component
export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
       Puravankara plots in Rajanukunte are located on Doddaballapur Road, North Bangalore, near the Kempegowda International Airport and are part of a gated, premium residential community.  </span>
          <br />
          
            <span>
            <p>  The project offers plots ranging from 1,000 to 2,500 sq. ft. with prices starting from approximately ₹75 Lakhs. </p>
            <br/>
            <p>  The development emphasizes a balanced blend of luxury and affordability, with plans for amenities, structured pricing, and strong long-term investment potential due to the area's rapid development. </p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => setContactModal(!contactmodal)} // Toggle contact modal on button click
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Sunset Park Phase 2"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
