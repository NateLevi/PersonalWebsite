import { useOutletContext } from "react-router-dom";

const ProjectCard = ({ projectName, description, image, link }) => {
  const { colorMode } = useOutletContext();

  return (
    <div
      className={`border rounded-lg ${
        colorMode === "dark"
          ? "shadow-[0_4px_6px_rgba(255,255,255,0.5)]"
          : "shadow-lg"
      } p-6 bg-white w-full max-w-4xl mx-auto my-8`}
    >
      {/* Image with Hover Zoom Effect */}
      <div className="overflow-hidden rounded-lg">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={projectName}
            className="w-full h-auto md:h-[500px] object-cover rounded-lg transition-transform duration-300 hover:scale-110"
          />
        </a>
      </div>

      {/* Project Title & Description */}
      <h2 className="text-2xl font-bold mt-4 text-black">{projectName}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
