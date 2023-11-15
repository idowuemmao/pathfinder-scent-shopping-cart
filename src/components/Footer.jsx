import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useForm } from "react-hook-form";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:idowuemmao@gmail.com?subject=Contact PathfinderScent&body=${formData.message}.`;
    reset();
  };
  return (
    <footer>
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        className="bg-home-bg bg-cover border-t-[1px] border-primary text-white mt-24"
      >
        <div className=" px-8 md:px-16  pb-20 w-full">
          <h2 className="text-2xl md:text-4xl text-primary text-center pt-4 ">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center mt-8 w-full ">
            {/* left */}
            <form
              className="grid gap-4 col-span-2 w-10/12"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="text-center">
                <Typewriter
                  words={[
                    "We would love to hear from you",
                    "How can we help you?",
                    "Reach out to us",
                  ]}
                  loop={50}
                  cursor
                  className="text-primary flex border-2"
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
              <input
                {...register("email")}
                required
                className="bg-transparent border-[1px] text-xs p-2"
                type="email"
                placeholder="Your email"
              />
              <textarea
                {...register("message")}
                name="message"
                id="message"
                cols="10"
                rows="5"
                placeholder="Type the message here"
                className="bg-transparent border-[1px] text-xs p-2"
              />
              <button
                type="submit"
                className="w-full mt-8 py-2 rounded-xl bg-primary text-black font-bold hover:underline hover:bg-white"
              >
                Send
              </button>
            </form>
            {/* right */}
            <div className="flex flex-wrap md:grid md:place-items-center text-xs md:text-sm gap-4 justify-center items-center">
              <a
                href="https://www.instagram.com/emmygreatmusic/"
                className="flex gap-2 items-center hover:text-[#e30ab2]"
              >
                <IoLogoInstagram className="text-[#e30ab2]" /> Instagram
              </a>
              <a
                href="https://wa.me/2349075220832"
                className="flex gap-2 items-center hover:text-green-500"
              >
                <IoLogoWhatsapp className="text-green-500" /> Whatsapp
              </a>
              <h4 className="flex items-center gap-2">
                <MdLocalPhone className="text-red-500" />
                <a href="tel:09075220832" className="hover:text-red-500">
                  +2349075220832
                </a>
              </h4>
              <h4 className="flex items-center gap-2">
                <MdOutlineMailOutline className="text-blue-500" />
                <a
                  href="mailto:pathfinderscentglobal@gmail.com"
                  className="hover:text-blue-500"
                >
                  pathfinderscentglobal@gmail.com
                </a>
              </h4>
            </div>
          </div>
        </div>
        <p className="text-center text-xs md:text-sm pb-8 italic">
          &#169; 2023 Pathfinder Scent Global. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
