import React from "react";
import data from "./data.json";
import Card, { CardType } from "./components/Card";

const Experiences: React.FC = () => {
  return (
    <div id="projects" className="relative">
		<h1 className="text-4xl text-center">Projects</h1>
      {data?.jobs?.map((job: CardType, index: number) => {
        return (
          <div
            key={index}
            className={`
						relative flex flex-col md:flex-row items-start justify-evenly  max-w-5xl mx-auto px-3 gap-7 my-16
					`}
          >
            <Card job={job} rtl={!(index % 2)} />
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
