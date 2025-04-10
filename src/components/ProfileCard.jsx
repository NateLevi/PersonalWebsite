import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useOutletContext } from "react-router-dom";
const ProfileCard = () => {
  const { colorMode} = useOutletContext()
    return (
      <div className="flex flex-col items-center justify-center min-[h-screen]">
        <div className="flex flex-col items-center text-center p-20">
          {/* Profile Image */}
          <img
            src="/download.png" // Replace with actual image URL
            alt="Profile"
            className="w-75 h-75 rounded-full object-cover"
          />
  
          {/* Name & Title */}
          <h1 className="text-4xl font-bold mt-3">Nate L.</h1>
          <p className="text-gray-600 pt-2">Full Stack Software Engineer</p>
  
          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a href="https://github.com/NateLevi" target="_blank">
                <FontAwesomeIcon icon={faGithub} className={`${colorMode === 'light' ? 'text-black text-4xl' : 'text-white text-4xl'} hover:text-gray-600`} />
            </a>
            <a href="https://www.linkedin.com/in/natelevi/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className={`${colorMode === 'light' ? 'text-black text-4xl' : 'text-white text-4xl'} hover:text-gray-600`} />
            </a>
            <a href="https://x.com/taoofnate" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} className={`${colorMode === 'light' ? 'text-black text-4xl' : 'text-white text-4xl'} hover:text-gray-600`} />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  