import React from "react";
import perf from "../assets/perf.png";
import other from "../assets/other.png";

const Home = () => {
  return (
    <main className="bg-home-bg bg-cover bg-no-repeat ">
      <div className="w-full flex flex-col md:flex-row gap-20 items-center justify-center p-10">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="h-96 w-11/12 max-w-xs border-4 border-primary bg-gradient-to-r from-yellow-950 to-primary rounded-xl flex items-center justify-center flex-col gap-1"
        >
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            src={perf}
            alt=""
            className="object-contain w-11/12 h-3/4"
          />
          <h1 className="text-white font-bold text- text-center text-4xl">
            PERFUMES
          </h1>
          <a
            href="/perfumes"
            className="text-black text-sm font-bold bg-white px-2 py-1 rounded-full"
          >
            Open
          </a>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="h-96 w-11/12 max-w-xs border-4 border-primary bg-gradient-to-r from-yellow-950 to-primary rounded-xl flex items-center justify-center flex-col gap-1"
        >
          <img
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            src={other}
            alt=""
            className="object-contain w-11/12 h-3/4"
          />
          <h1 className="text-white font-bold text- text-center text-4xl">
            OTHER ITEMS
          </h1>
          <a
            href="/others"
            className="text-black text-sm font-bold bg-white px-2 py-1 rounded-full"
          >
            Open
          </a>
        </div>
      </div>
      s
    </main>
  );
};

export default Home;
