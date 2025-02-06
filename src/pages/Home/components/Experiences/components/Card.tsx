import React from "react";
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";

const Card: React.FC<{ job: CardType; rtl?: boolean }> = ({
  job,
  rtl = true,
}) => {
  const Showcase = () => (
    
    <div className="border border-primary p-2 bg-primary bg-opacity-5 rounded-xl">
      <Link to={job.showcase.url} target="_blank">
        <img
          src={job.showcase.image}
          alt={job.company}
          className="w-[95vw] md:max-w-sm max-h-[270px] object-cover rounded mb-2"
        />
      </Link>
      <div className="flex flex-row items-center gap-2">
        <Icon icon="typcn:link" className="text-3xl " />
        <Link
          to={job.showcase.url}
          target="_blank"
          className="underline text-slate-200 underline-offset-2"
        >
          {job.showcase.url}
        </Link>
      </div>
    </div>
  );
  const Details = () => (
    <div className="flex-1 flex flex-col items-center md:items-start justify-start">
      <Link to={job.company_url} target="_blank">
        <h3 className="font-extrabold tracking-wider underline-offset-4 mb-2 text-2xl  underline">
          {job.company}
          <InlineIcon
            icon="majesticons:open-line"
            className="text-base ml-2 inline-flex"
          />
        </h3>
      </Link>
      <h4 className="font-semibold text-slate-400 text-sm">
        {job.company_location}
      </h4>
      <p className="text-justify text-slate-200 text-sm mt-2 mb-6">
        {job.description}
      </p>

      <Link to={`/details/${job.company}`} className="hover:underline">view more</Link>
    </div>
  );

  return (
    <>
      {rtl ? (
        <>
          <div className="inline-flex md:hidden">
            <Showcase />
          </div>
          <Details />
          <div className="hidden md:inline-flex">
            <Showcase />
          </div>
        </>
      ) : (
        <>
          <Showcase />
          <Details />
        </>
      )}
    </>
  );
};

export interface CardType {
  company: string;
  company_url: string;
  company_location: string;
  description: string;
  positions: Position[];
  showcase: Showcase;
}

export interface Position {
  title: string;
  start_date: string;
  end_date: string;
  duration: string;
  location_type: string;
  job_type: string;
}

export interface Showcase {
  image: string;
  url: string;
}

export default Card;
