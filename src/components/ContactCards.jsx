import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useOutletContext } from "react-router-dom";

const contactCards = [
  // {
  //   name: "Email",
  //   icon: <FaMailBulk className="text-black w-12 h-12" />,
  //   description: "Contact me at",
  //   contact: "nathan.levi8@gmail.com",
  // },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-black w-12 h-12" />,
    description: "Professional network updates",
    contact: "Nate Levi",
  },
  {
    name: "Github",
    icon: <FaGithub className="text-black w-12 h-12" />,
    description: "Commits and Contributions",
    contact: "@natelevi",
  },
  // {
  //   name: "X/Twitter",
  //   icon: <FontAwesomeIcon icon={faXTwitter} className="text-black w-12 h-12"/>,
  //   description: "Personal Twitter/X"
  //   contact: "@taoofnate"
  // }
];

const ContactCards = () => {
  const { colorMode } = useOutletContext();

  return (
    <div className="text-center py-10 bg">
      <h1 className="text-4xl font-bold mb-8"></h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 max-w-4xl mx-auto">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-white ${
              colorMode === "dark"
                ? "shadow-[0_4px_6px_rgba(255,255,255,0.5)]"
                : "shadow-md"
            } rounded-lg p-6`}
          >
            {card.icon}
            <h2 className="text-xl text-black font-bold mt-3">{card.name}</h2>
            <p className="text-gray-600">{card.description}</p>
            {card.contact === "@natelevi" && (
              <a
                href="https://github.com/natelevi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 font-bold"
              >
                @natelevi
              </a>
            )}
            {card.contact === "Nate Levi" && (
              <a
                href="https://linkedin.com/in/natelevi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 font-bold"
              >
                Nate Levi
              </a>
            )}
            {card.contact === "nathan.levi8@gmail.com" && (
              <a
                href="mailto:nathan.levi8@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 font-bold"
              >
                nathan.levi8@gmail.com
              </a>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ContactCards;
