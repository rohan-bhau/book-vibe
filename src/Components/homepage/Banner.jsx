import React from 'react';
import heroImg from "../../assets/hero_img.jpg"

const Banner = () => {
    return (
      <div className="px-40 container mx-auto  rounded-2xl bg-base-200 mt-12 pb-10 min-h-[40vh]">
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center justify-between">
          <div className='mt-10 md:20'>
            <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn bg-[#23BE0A] mt-12 text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    );
}

export default Banner;

