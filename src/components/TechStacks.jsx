import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGit, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiVite, SiTailwindcss, SiHeroku, SiFirebase, SiSupabase} from "react-icons/si";
import { useOutletContext } from "react-router-dom";
const techStacks = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-16 h-16" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-16 h-16" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 w-16 h-16" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 w-16 h-16" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-16 h-16" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800 w-16 h-16" /> },
  { name: "React", icon: <FaReact className="text-blue-400 w-16 h-16" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500 w-16 h-16" /> },

  { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-16 h-16" /> },
  { name: "FireBase", icon: <SiFirebase className="text-orange-400 w-16 h-16" /> },
  { name: "Supabase", icon: <SiSupabase className="text-indigo-500 w-16 h-16" /> },
  { name: "Git", icon: <FaGit className="text-red-500 w-16 h-16" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black w-16 h-16" /> },
];

const TechStacks = () => {
  const { colorMode} = useOutletContext()
  return (
    <div className="text-center py-10">
      <h1 className={`${colorMode === 'light' ? 'text-black' : 'text-white'} font-bold text-6xl mb-8`}>Tech Stack</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
        {techStacks.map((tech, index) => (
          <div key={index} className={`${colorMode === 'light' ? 'bg-white shadow-md text-black' : 'bg-black shadow-[0_4px_6px_rgba(255,255,255,0.5)] text-white'} flex flex-col items-center rounded-lg p-4 hover:scale-105 transition-transform duration-200`}>
            {tech.icon}
            <p className="mt-2 text-lg font-semibold">{tech.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TechStacks;
