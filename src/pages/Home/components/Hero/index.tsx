import React from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Slide } from "@components/Slide";
import ContributionGraph from "@components/GithubContribution/ContributionGraph";
import { Icon } from "@iconify/react";

const Hero: React.FC = () => {
  const [dpLoading, setDpLoading] = React.useState(true);

  return (
    <>
      <div className="mx-10 flex flex-col md:flex-row items-center md:items-start justify-evenly gap-6 ">
        <motion.div
          layout
          className="overflow-hidden mt-10 p-3 rounded-3xl border-4 border-primary-500 w-fit h-fit"
        >
          <motion.img
            src="/profile.jpg"
            className="max-w-[296px] w-[95vw] max-h-[296px] object-cover rounded-lg"
            initial={{
              // scale: 0.5,
              height: "10px",
            }}
            animate={{
              // scale: 1,
              height: dpLoading ? "10px" : "auto",
            }}
            onLoad={() => setDpLoading(false)}
            transition={{ type: "spring", stiffness: 50, when: "" }}
          />
        </motion.div>
        <div className="flex flex-col items-center md:items-start gap-4 md:pt-8">
          <h1 className="text-2xl mt-8">
            Hi, I'm <span className="font-bold text-primary">{data.name}</span>{" "}
          </h1>
          <p>
            &#64;{data.username} &middot; {data.profession} &middot;{" "}
            {data.pronouns.join("/")}
          </p>

          <h2 className="text-4xl font-semibold text-center md:text-left max-w-md">
            {data.about}
          </h2>
          <div className="flex items-center gap-2 flex-wrap max-w-md">
            {data.socials?.map((social, index) => (
              <React.Fragment key={index}>
                <Link
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-1 font-semibold text-gray-300 hover:text-white transition-colors duration-300 tracking-widest"
                >
                  <Icon icon={social.icon} className="text-xl text-primary" />{" "}
                  {social.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
           <h1><span className="text-primary-200">Email:</span> sobhanmridha786@gmail.com</h1>
           <h1><span className="text-primary-200">Number:</span> 01799492559</h1>
        </div>
      </div>
      <div className="md:flex items-center justify-center">
        <Slide delay={0.18} className=" px-6 my-10">
          <ContributionGraph />
        </Slide>
      </div>
      <h1 className="text-4xl text-center">My Skill</h1>
      <div className="flex flex-row flex-wrap items-center justify-evenly gap-7 mt-10 px-6">
        {data?.companies?.map((company, index) => (
          <div key={index}>
            <img
              src={company}
              className="h-16 mix-blend-luminosity hover:mix-blend-normal transition duration-500 hover:scale-110"
            />
          </div>
        ))}
        
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-2 my-20 gap-14">
        <p className="max-w-md text-xl md:text-2xl font-semibold text-center md:text-left">
        Let's Work Together – Check My Resume.
        </p>
        <button
    
          className="px-10 py-3 bg-primary bg-opacity-10 rounded-full border-2 border-primary text-primary font-extrabold tracking-widest"
        >
          Download resume
        </button>
      </div>
    </>
  );
};

export default Hero;
