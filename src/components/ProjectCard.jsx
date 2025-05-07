import { useOutletContext } from "react-router-dom";
import { FaGithub, FaEye } from "react-icons/fa";

const ProjectCard = ({ projectName, description, image, link, liveLink }) => {
  const { colorMode } = useOutletContext();

  return (
    <div
      className={`border rounded-lg ${
        colorMode === "dark"
          ? "shadow-[0_4px_6px_rgba(255,255,255,0.5)]"
          : "shadow-lg"
      } p-4 bg-white w-full max-w-2xl mx-auto my-4`}
    >
      {/* Image with Hover Zoom Effect */}
      <div className="overflow-hidden rounded-lg">
        <a href={liveLink || link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={projectName}
            className="w-full h-auto md:h-[300px] object-cover rounded-lg transition-transform duration-300 hover:scale-110"
          />
        </a>
      </div>

      {/* Project Title & Description */}
      <h2 className="text-xl font-bold mt-3 text-black">{projectName}</h2>
      <p className="text-gray-600 mt-1 mb-3 text-sm">{description}</p>

      {/* Links Section - Centered */}
      <div className="flex justify-center items-center space-x-6 mt-2">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 text-2xl"
            aria-label="GitHub Link"
          >
            <FaGithub size={22} />
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-500 text-2xl"
            aria-label="Live Preview Link"
          >
            <FaEye size={22} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
