import data from "../Home/components/Experiences/data.json";
import { Link, useParams } from "react-router-dom";

const Index = () => {
  const { company } = useParams();
  const { jobs } = data;
  const job = jobs?.filter((j) => j.company === company);

  const {
    showcase,
    main_tech,
    github,
    description,
    challenges,
    future_improvements,
  } = job[0];
  return (
    <div>
      <div>
        {" "}
        <img className="rounded-lg" src={showcase.image} alt="" />
      </div>
      <div className="flex justify-between items-start my-5 gap-8">
        <div>{description}</div>
        <div className="flex flex-col gap-4">
          <Link to={showcase.url} target="_blank">
            Live Link: <span className="hover:underline">{showcase.url}</span>
          </Link>
          <Link to={github} target="_blank">
            Github repo: <span className="hover:underline">{github}</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-start my-5 gap-8">
        <div>
          <h1 className="text-4xl mb-2">Main technology stack used</h1>
          {main_tech?.map((tech) => (
            <li>{tech}</li>
          ))}
        </div>

        <div>
          <div>
          <h1 className="text-4xl mb-2">Development challenges encountered</h1>
            {challenges?.map((ch) => (
              <li>{ch}</li>
            ))}
          </div>
        </div>
      </div>

      <div>
      <h1 className="text-4xl mb-2">Future enhancements and plans</h1>
        {future_improvements?.map((im) => (
          <li>{im}</li>
        ))}
      </div>
    </div>
  );
};

export default Index;
